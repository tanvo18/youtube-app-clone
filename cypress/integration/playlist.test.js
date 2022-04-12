describe('Test playlist page', () => {
  it('load page successfully', () => {
    cy.visit('/');
  });

  it('should not render button login', () => {
    cy.get('.btn-login').should('not.exist');
  });

  it('should redirect to playlist video page when click playlist link', () => {
    cy.get('.btn-avatar').click();
    cy.get('.dropdown-item').first().click();
    cy.url().should('include', '/playlist');
  });

  it('should render video if playlist not empty', () => {
    cy.get('.playlist li').then(($listItem) => {
      if($listItem) {
        $listItem.hasClass('playlist-item');
      }
    });
  });

  it('should direct to playlist video page when click video', () => {
    cy.get('.playlist li').first().then(($listItem) => {
      cy.wrap($listItem).click();
      cy.url().should('include', '/playlist-detail');
    });
  });
});