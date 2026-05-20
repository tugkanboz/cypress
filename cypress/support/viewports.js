export const VIEWPORTS = {
  mobile: { width: 375, height: 667 },
  tablet: { width: 768, height: 1024 },
  desktop: { width: 1920, height: 1080 },
}

Cypress.Commands.add('useViewport', (name) => {
  const preset = VIEWPORTS[name]
  if (!preset) {
    throw new Error(
      `Unknown viewport "${name}". Available: ${Object.keys(VIEWPORTS).join(', ')}`,
    )
  }
  return cy.viewport(preset.width, preset.height)
})
