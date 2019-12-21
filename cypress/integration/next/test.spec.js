context('Next App', () => {
  it('visit the home page', () => {
    cy.visit('/')

    cy.get('.hero')
      .contains('Welcome to Next.js!')
  })

  it('visits the home page server side', () => {
    cy.serverSideVisit('/')

    cy.get('.hero')
      .contains('Welcome to Next.js!')
  })
})
