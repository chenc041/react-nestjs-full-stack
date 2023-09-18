describe('Visit login page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/login');
  });

  it('should display login page', () => {
    cy.get('button[type=submit]').should('have.text', '登 录');
  });

  it('should display validator error', () => {
    cy.get('button[type=submit]').click();
    cy.get('.ant-form-item-explain-error').should('contain.text', '请输入用户名!');
  });

  it('should change value correct', () => {
    cy.get('#username').type('chenc').should('have.value', 'chenc');
  });
});
