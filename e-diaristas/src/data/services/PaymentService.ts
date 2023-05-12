import pagarme, { CardInterface, CardValidateInterface } from 'pagarme';

export const PaymentService = {
  validate( card: CardInterface ): CardValidateInterface{
    return pagarme.validate({ card }).card;//estou recebendo do parametro os dados do cartão
  }
}