describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('should show all resvervations in home screen', () => {
    cy.contains('Turing Cafe Reservations')
    .url().should('include', '/')
    .intercept('GET',  `http://localhost:3001/api/v1/reservations`, {
      statusCode: 201
    })
  })

    it('should render home page', () => {
      cy.contains('h1','Turing Cafe Reservations')
    })

    it('should not take user to different page', () => {
      cy.get().should('not.exist','h5')
    })

    it('should show a reservations name', () => {
      cy.contains('.res-container', 'Leta')
    })

    it('should not show a name that doesnt exist', () => {
      cy.get().should('not.exist', 'Bastet')
    })

    it('should be able to put a date', () => {
      cy.get('input[name="name"]')
      .type("derek")
      .should('have.value', 'derek')
    })

    // it('should be able to type a number of guests', () => {
    //   cy.get('input[number="number"]')
    //   .type(2)
    //   .should('have.value', 2)
    // })

        //NEED TO WORK ON MY TESTING.
})