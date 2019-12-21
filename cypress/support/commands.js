// Request a page over http from the server and mount it in the DOM
//
// To simulate server side rendering remove all scripts so no window:onload
// events can occur and we can test server rendered views

Cypress.Commands.add('serverSideVisit', (url) => {
  cy.reload()
  cy.request(url).its('body').then((html) => {
    html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    cy.state('document').write(html)
  })
  cy.get('script').should('not.exist')
})
