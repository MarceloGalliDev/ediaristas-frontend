// verifica se tem caracteres que não são números e compara com tamanho de 8
export const ValidationService = {
  cep(cep: string): boolean {
    return (
      cep.replace(/\D/g, '').length === 8
    )
  },
};