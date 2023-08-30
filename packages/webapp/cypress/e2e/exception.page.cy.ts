describe('Visit exception page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/404');
  });

  it('display error text', () => {
    cy.get('.ant-result-subtitle').should('have.text', 'Sorry, the page you visited does not exist.');
  });
});
