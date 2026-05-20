import './commands'
import './viewports'

const IGNORED_SITE_ERRORS = [
  /ResizeObserver loop limit exceeded/,
  /ResizeObserver loop completed with undelivered notifications/,
]

Cypress.on('uncaught:exception', (err) => {
  if (IGNORED_SITE_ERRORS.some((pattern) => pattern.test(err.message))) {
    return false
  }
  return true
})
