const { defineConfig } = require("cypress");

module.exports = {
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // O caminho deve apontar para a pasta e2e
  },
}

