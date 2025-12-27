const { getContrastRatio, parseRgb } = require('./color-utils');

async function runTest() {
  const element = {
    style: {
      color: 'rgb(51, 51, 51)',
      backgroundColor: 'rgb(255, 255, 255)'
    }
  };

  const ratio = getContrastRatio(
    parseRgb(element.style.color),
    parseRgb(element.style.backgroundColor)
  );
  
  return {
    component: 'BreederProfile',
    ratio: ratio.toFixed(1),
    status: ratio >= 4.5 ? 'pass' : 'fail'
  };
}

module.exports = runTest;
