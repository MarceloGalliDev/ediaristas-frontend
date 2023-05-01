context('Busca pelo CEP', () => {
  beforeEach(() => {
    cy.visit('/encontrar-diarista')
  })

  it('botao desabilitado e habilitado', () => {
    cy.get('.MuiOutlinedInput-input').type('123456')
  })
})