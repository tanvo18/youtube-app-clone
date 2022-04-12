describe('Test homepage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('successful loads', () => {
    cy.visit('/');
  });

  it('should render button sign in',() => {
    cy.get('.btn-login').should('have.text', 'SIGN IN');
  });

  it('should redirect to homepage when click logo', () => {
    cy.get('.logo').click();
    cy.url().should('include','/');
  });

  it('should render search result when enter search button without keyword', () => {
    cy.get('.input-group-append > a').click();
    cy.url().should('include', '/search');
  });

  it('should render search result when click search button with keyword', () => {
    cy.get('.search-wrap > input').type('Football');
    cy.get('.input-group-append > a').click();
    cy.url().should('include', '/search');
    cy.get('.video-list li').should('have.length.to.be.greaterThan', 0);
  });

  it('should render search result when write keyword and enter', () => {
    cy.get('.search-wrap > input').clear().type('Football{enter}');
    cy.url().should('include', '/search');
    cy.get('.video-list li').should('have.length.to.be.greaterThan', 0);
  });

  it('should render there are no result if it has no video in searching', () => {
    cy.get('.search-wrap > input').clear().type('^^^^');
    cy.get('.input-group-append > a').click();
    cy.url().should('include', '/search');
    cy.get('.video-list div').should('have.text', 'There are no videos');
  });

  it('should redirect to detail video page when click video', () => {
    cy.get('.video-list li').first().click();
    cy.url().should('include', '/watch');
  });

  it('should redirect homepage when visit playlist page without authentication', () => {
    cy.visit('/playlist');
    cy.url().should('include', '/');
  });

  it('should redirect homepage when visit upload video page without authentication', () => {
    cy.visit('/upload-video');
    cy.url().should('include', '/');
  });

});