const { getContrastRatio, parseRgb } = require('./color-utils');

async function runTest() {
  const element = {
    style: {
      color: 'rgb(255, 255, 255)',
      backgroundColor: 'rgb(30, 30, 30)',
      activeBg: 'rgb(0, 100, 200)',
      disabledColor: 'rgb(150, 150, 150)'
    }
  };

  const tests = {
    normal: getContrastRatio(parseRgb(element.style.color), parseRgb(element.style.backgroundColor)),
    active: getContrastRatio(parseRgb(element.style.color), parseRgb(element.style.activeBg)),
    disabled: getContrastRatio(parseRgb(element.style.disabledColor), parseRgb(element.style.backgroundColor))
  };

  const passed = Object.values(tests).every(ratio => 
    ratio >= (tests.disabled ? 3 : 4.5)
  );
  
  return {
    component: 'TradingModeSwitch',
    ratios: Object.fromEntries(Object.entries(tests).map(([k,v]) => [k, v.toFixed(1)])),
    status: passed ? 'pass' : 'fail'
  };
}

module.exports = runTest;
