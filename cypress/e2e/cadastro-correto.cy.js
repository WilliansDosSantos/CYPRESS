describe('Pagina de cadastro', () => {
  it('passesDeve preencher o os campos do formulario corretamente para cadastrar um novo usuario', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('Will Saint');
    cy.get('[data-test="input-email"]').type('Will@email.com');
    cy.get('[data-test="input-password"]').type('Senha123');
    cy.get('[data-test="input-confirm-password"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();
  })
})