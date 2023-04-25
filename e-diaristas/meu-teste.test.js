

function soma(a, b) {
  return a + b
}

test('Deve Somar', () => {
  expect(soma(1, 2)).toBe(3)
})