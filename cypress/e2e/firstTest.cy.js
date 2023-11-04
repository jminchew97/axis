
describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.get('h1').should('contain', 'Vite + React')

    const countButton = cy.get('[id=counter-button]')
    
    for (let i=0; i < 5; i++){
      countButton.click()
    }
    console.log(countButton.invoke('html').should('include', 'count is 5'))
  
  })
})