const { getContrastRatio, parseRgb } = require('./color-utils');

async function runTest() {
  const element = {
    style: {
      textColor: 'rgb(255, 255, 255)',
      bgColor: 'rgb(30, 30, 30)',
      buttonColor: 'rgb(0, 80, 160)',
      errorColor: 'rgb(220, 50, 50)',
      inputBorder: 'rgb(110, 110, 110)'
    }
  };

  const tests = {
    textBg: getContrastRatio(parseRgb(element.style.textColor), parseRgb(element.style.bgColor)),
    buttonText: getContrastRatio(parseRgb(element.style.textColor), parseRgb(element.style.buttonColor)),
    errorText: getContrastRatio(parseRgb(element.style.textColor), parseRgb(element.style.errorColor)),
    inputBorder: getContrastRatio(parseRgb(element.style.inputBorder), parseRgb(element.style.bgColor))
  };

  const passed = tests.textBg >= 4.5 && 
                tests.buttonText >= 4.5 &&
                tests.errorText >= 4.5 &&
                tests.inputBorder >= 3.0;

  const result = {
    component: 'GuestAuthGateway',
    ratios: {
      textBg: tests.textBg.toFixed(1),
      buttonText: tests.buttonText.toFixed(1),
      errorText: tests.errorText.toFixed(1),
      inputBorder: tests.inputBorder.toFixed(1)
    },
    status: passed ? 'PASS' : 'FAIL'
  };

  console.log('=== Detailed WCAG Verification ===');
  console.log('Component:', result.component);
  console.log('Contrast Ratios:');
  console.log('- Text/Background:', result.ratios.textBg);
  console.log('- Button Text:', result.ratios.buttonText);
  console.log('- Error Text:', result.ratios.errorText);
  console.log('- Input Border:', result.ratios.inputBorder);
  console.log('Status:', result.status);
  
  return result;
}

module.exports = runTest;
