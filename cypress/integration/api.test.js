import * as constant from '../../src/constants/constants';

describe('Test video API', () => {
  it('shoud get popular video', () => {
    let result;
    result = cy.request(`${constant.BASE_URL}/videos?chart=${constant.CHART}&regionCode=${constant.REGION_CODE}&part=${constant.PART}&videoCategoryId=${''}&maxResults=${constant.MAX_RESULT}&key=${constant.API_KEY}`);

    result.its('body').its('items').should('have.length.to.be.greaterThan', 0);
  });

  it('should get video by Id', () => {
    let result;
    result = cy.request(`${constant.BASE_URL}/videos?id=${'DikdrgvUSHI'}&part=${constant.PART}&key=${constant.API_KEY}`);
    result.its('body').its('items').should('have.length.to.be.greaterThan', 0);
  });

  it('should getStatisticById by Id', () => {
    let result;
    result = cy.request(`${constant.BASE_URL}/videos?id=${'DikdrgvUSHI'}&part=${constant.PART}&maxResults=${constant.MAX_RESULT}&key=${constant.API_KEY}`);
    result.its('status').should('to.equal', 200);
  });

  it('should searchVideoByKeyword', () => {
    let result;
    result = cy.request(`${constant.BASE_URL}/search?part=${'snippet'}&maxResults=${constant.MAX_RESULT}&q=${'Football'}&type=${constant.TYPE}&key=${constant.API_KEY}`);
    result.its('headers').its('content-type').should('include', 'application/json');
  });

  it('should searchRelatedVideo', () => {
    let result;
    result = cy.request(`${constant.BASE_URL}/search?part=${'snippet'}&maxResults=${constant.MAX_RESULT}&relatedToVideoId=${'DikdrgvUSHI'}&type=${constant.TYPE}&key=${constant.API_KEY}`);
    result.its('headers').its('content-type').should('include', 'application/json');
  });

  it('should getVideoComment', () => {
    let result;
    result = cy.request(`${constant.BASE_URL}/commentThreads?part=${'snippet,replies'}&maxResults=${100}&textFormat=${'plainText'}&order=${'time'}&videoId=${'DikdrgvUSHI'}&key=${constant.API_KEY}`);
    result.its('body').its('items').should('have.length.to.be.greaterThan', 0);
  });
});
