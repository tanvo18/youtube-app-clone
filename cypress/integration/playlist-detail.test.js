describe('Test playlist detail page', () => {

  it('load page successfully', () => {
    cy.visit('/');
  });

  it('should not render button login', () => {
    cy.get('.btn-login').should('not.exist');
  });

  it('should redirect to playlist video page when click playlist link', () => {
    cy.get('.btn-avatar').click();
    cy.get('.dropdown-item').first().click();
    cy.get('.playlist li').first().then(($listItem) => {
      cy.wrap($listItem).click();
      cy.url().should('include', '/playlist-detail');
    });
  });

  it('should render video if playlist video not empty', () => {
    cy.get('.playlist li').then(($listItem) => {
      cy.wrap($listItem).should('exist');
    });
  });

  it('should direct to detail video page when click video', () => {
    cy.get('.playlist li').first().then(($listItem) => {
      cy.wrap($listItem).click();
      cy.url().should('include', '/watch');
    });
  });
});