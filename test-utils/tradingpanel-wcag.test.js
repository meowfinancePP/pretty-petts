const { getContrastRatio, parseRgb } = require('./color-utils');

async function runTest() {
  const element = {
    style: {
      color: 'rgb(33, 33, 33)',
      backgroundColor: 'rgb(250, 250, 250)'
    }
  };

  const ratio = getContrastRatio(
    parseRgb(element.style.color),
    parseRgb(element.style.backgroundColor)
  );
  
  return {
    component: 'TradingPanel',
    ratio: ratio.toFixed(1),
    status: ratio >= 4.5 ? 'pass' : 'fail'
  };
}

module.exports = runTest;
