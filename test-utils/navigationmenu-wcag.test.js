const { getContrastRatio, parseRgb } = require('./color-utils');

async function runTest() {
  const element = {
    style: {
      color: 'rgb(255, 255, 255)',
      backgroundColor: 'rgb(0, 0, 0)',
      hoverColor: 'rgb(240, 240, 240)',
      activeColor: 'rgb(220, 220, 220)'
    }
  };

  const tests = {
    normal: getContrastRatio(parseRgb(element.style.color), parseRgb(element.style.backgroundColor)),
    hover: getContrastRatio(parseRgb(element.style.hoverColor), parseRgb(element.style.backgroundColor)),
    active: getContrastRatio(parseRgb(element.style.activeColor), parseRgb(element.style.backgroundColor))
  };

  const passed = Object.values(tests).every(ratio => ratio >= 4.5);
  
  return {
    component: 'NavigationMenu',
    ratios: Object.fromEntries(Object.entries(tests).map(([k,v]) => [k, v.toFixed(1)])),
    status: passed ? 'pass' : 'fail'
  };
}

module.exports = runTest;
