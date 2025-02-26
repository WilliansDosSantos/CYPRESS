describe('Pagina de cadastro', () => {
    beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app');
      cy.get('[data-test="login-button"]').click();
      cy.intercept('POST', 'https://adopet-api-i8qu.onreder.com/adotante/login', {
        statusCode: 400, }).as('stubPost')
      })
  
    it('Deve preencher o os campos de login e autenticar o usuario ', () => {
      cy.get('[data-test="input-loginEmail"').type('Will@email.com');
      cy.get('[data-test="input-loginPassword"]').type('Senha123');
      cy.get('[data-test="submit-button"]').click();
    })
  })