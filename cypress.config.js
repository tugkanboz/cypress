const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents() {},
    baseUrl: 'https://www.ciceksepeti.com/',
    specPattern: 'cypress/e2e/**/*.cy.js',
    chromeWebSecurity: false,
    video: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    retries: {
      runMode: 2,
      openMode: 0,
    },
  },
})
