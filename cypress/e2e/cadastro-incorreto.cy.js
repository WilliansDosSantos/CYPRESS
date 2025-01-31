describe('Pagina de cadastro', () => {
    it('passesDeve preencher o os campos do formulario corretamente para cadastrar um novo usuario', () => {
      cy.visit('https://adopet-frontend-cypress.vercel.app');
      cy.get('[data-test="register-button"]').click();
      cy.get('[data-test="submit-button"]').click();
      cy.contains('É necessário informar um endereço de email').should('be.visible')
      cy.contains('Crie uma senha').should('be.visible')
      cy.contains('Repita a senha criada acima').should('be.visible')
    })
  })