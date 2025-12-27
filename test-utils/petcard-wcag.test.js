const { getContrastRatio, parseRgb } = require('./color-utils');

function logResult(result) {
  console.log('=== WCAG Test Results ===');
  console.log(`Component: ${result.component}`);
  Object.entries(result.ratios).forEach(([name, ratio]) => {
    console.log(`${name}: ${ratio}:1 ${ratio >= 4.5 ? '✅' : '❌'}`);
  });
  console.log(`Final Status: ${result.status}\n`);
}

async function runTest() {
  const element = {
    style: {
      textColor: 'rgb(240, 240, 240)',
      highlightColor: 'rgb(0, 50, 100)',
      statusText: 'rgb(255, 255, 255)'
    }
  };

  const tests = {
    textHighlight: getContrastRatio(
      parseRgb(element.style.textColor),
      parseRgb(element.style.highlightColor)
    ),
    statusHighlight: getContrastRatio(
      parseRgb(element.style.statusText),
      parseRgb(element.style.highlightColor)
    )
  };

  const passed = Object.values(tests).every(ratio => ratio >= 4.5);
  const result = {
    component: 'PetCard',
    ratios: {
      textHighlight: tests.textHighlight.toFixed(1),
      statusHighlight: tests.statusHighlight.toFixed(1)
    },
    status: passed ? 'PASS' : 'FAIL'
  };

  console.log('=== Detailed WCAG Results ===');
  console.log('Text Color:', element.style.textColor);
  console.log('Highlight Color:', element.style.highlightColor);
  console.log('Ratios:', result.ratios);
  console.log('Status:', result.status, '\n');

  logResult(result);
  return result;
}

module.exports = runTest;
