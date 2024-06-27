import cep from 'cep-promise';

export class CepService {
  async validateCep(cepUser: string) {
    try {
      const result = await cep(cepUser);

      if (result instanceof Error) {
        console.log('cep inválido');
      } else {
        return result;
      }
    } catch (error) {
      console.error('erro ao buscar cep');
    }
  }
}

const cepService = new CepService();
const aa = cepService.validateCep('6081-450');
console.log(aa);
