import pagarme, { CardInterface, CardValidateInterface } from 'pagarme';

//arquivo vindo do .env
const encryption_key = process.env.NEXT_PUBLIC_PAGARME_ENCRYPTION_KEY;

export const PaymentService = {
  validate( card: CardInterface ): CardValidateInterface{
    return pagarme.validate({ card }).card;//estou recebendo do parametro os dados do cartão
  },

  getHash(card: CardInterface): Promise<string>{
    //primeiro a conexão com pagarme
    return pagarme.client
      .connect({ encryption_key: encryption_key })
      .then((client) => client.security.encrypt(card));
  }
};