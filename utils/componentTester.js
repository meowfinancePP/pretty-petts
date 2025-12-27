const { render } = require('@testing-library/react')
const { axe } = require('jest-axe')

function checkLayout(container) {
  const elements = container.querySelectorAll('*')
  const issues = []
  
  elements.forEach(el => {
    const style = window.getComputedStyle(el)
    ['margin','padding','gap'].forEach(prop => {
      const value = parseFloat(style[prop])
      if (value && value % 8 !== 0) {
        issues.push({
          element: el.tagName,
          property: prop,
          value: value,
          expected: Math.round(value/8)*8
        })
      }
    })
  })
  return issues
}

module.exports = {
  testComponentInIsolation: async (Component) => {
    const { container } = render(<Component />)
    const results = await axe(container)
    return {
      accessibilityIssues: results.violations,
      layoutIssues: checkLayout(container),
      styleIssues: [] // To be implemented
    }
  }
}
