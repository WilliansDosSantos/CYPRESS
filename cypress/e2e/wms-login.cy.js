describe('Pagina de cadastro', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8090/netfabril-up/#/login');
    })
    it('Deve preencher o os campos de login e autenticar o usuario ', () => {
      cy.get('[data-test="username"]').type('admin');
      cy.get('[data-test="password"]').type('struts');
      cy.get('[data-test="btnLogin"] > .v-btn__content').click();
    })
  })