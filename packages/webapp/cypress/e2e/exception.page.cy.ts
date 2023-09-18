describe('Visit exception page', () => {
  it('should display 403 page error text', () => {
    cy.visit('http://localhost:8080/403');
    cy.get('.ant-result-subtitle').should('have.text', '对不起, 您没有权限访问这个页面');
  });

  it('should display 404 page error text', () => {
    cy.visit('http://localhost:8080/404');
    cy.get('.ant-result-subtitle').should('have.text', '对不起, 您访问的页面不存在');
  });

  it('should display 500 page error text', () => {
    cy.visit('http://localhost:8080/500');
    cy.get('.ant-result-subtitle').should('have.text', '对不起, 服务出错了');
  });

  it('should redirect to 404 page', () => {
    cy.visit('http://localhost:8080/405');
    cy.get('.ant-result-subtitle').should('have.text', '对不起, 您访问的页面不存在');
  });
});
