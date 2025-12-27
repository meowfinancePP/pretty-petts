import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { createElement, type ComponentType } from 'react'

type LayoutIssue = {
  element: string
  property: string
  value: number
  expected: number
}

const SPACING_PROPS = ['margin', 'padding', 'gap'] as const
type SpacingProp = (typeof SPACING_PROPS)[number]

function checkLayout(container: HTMLElement) {
  const elements = container.querySelectorAll<HTMLElement>('*')
  const issues: LayoutIssue[] = []

  elements.forEach(el => {
    const style = window.getComputedStyle(el)
    SPACING_PROPS.forEach((prop: SpacingProp) => {
      const rawValue = style.getPropertyValue(prop)
      const value = parseFloat(rawValue)
      if (Number.isFinite(value) && value !== 0 && value % 8 !== 0) {
        issues.push({
          element: el.tagName,
          property: prop,
          value,
          expected: Math.round(value / 8) * 8,
        })
      }
    })
  })
  return issues
}

export const testComponentInIsolation = async (Component: ComponentType) => {
  const { container } = render(createElement(Component))
  const results = await axe(container)
  return {
    accessibilityIssues: results.violations,
    layoutIssues: checkLayout(container),
    styleIssues: [] // To be implemented
  }
}
