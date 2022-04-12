describe('Test detail video page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('.video-list li').first().click();
  });

  it('should redirect to detail video page when click video on homepage', () => {
    cy.get('.video-list li').first().click();
    cy.url().should('include', '/watch');
  });

  it('should render title of video', () => {
    expect(cy.get('.detail-title')).to.exist;
  });

  it('should render detail view of video', () => {
    expect(cy.get('.detail-view')).to.exist;
  });

  it('should redirect to detailvideo when click related video', () => {
    cy.get('.video-list li').first().click();
    cy.url().should('include', '/watch');
  });

  it('should render search result when enter search button with keyword', () => {
    cy.get('.search-wrap > input').type('Football');
    cy.get('.input-group-append > a').click();
    cy.url().should('include', '/search');
    cy.get('.video-list li').should('have.length.to.be.greaterThan', 0);
  });
});