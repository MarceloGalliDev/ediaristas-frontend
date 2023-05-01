context('Busca pelo CEP', () => {
  beforeEach(() => {
    cy.visit('/encontrar-diarista')
  });

  it('botao desabilitado e habilitado', () => {
    cy.get('.MuiOutlinedInput-input').type('1234567')
    
    //aqui colocamos uma const para testar diversas vezes a mesma função do cypres
    const button = cy.get('button').contains(/buscar/i)
    //verificando se o botão está vazio
    button.should('be.disabled')
    
    //usamos o clear() para limpar o cache e depois executar a próxima função
    cy.get('.MuiOutlinedInput-input').clear().type('1234567')
    button.should('not.be.disabled')
  });

  it('buscar cep', () => {
    
  })
})