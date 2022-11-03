const { defineConfig } = require('cypress')

module.exports = defineConfig({
  "$schema": "https://on.cypress.io/cypress.schema.json",
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*']
  }
})
