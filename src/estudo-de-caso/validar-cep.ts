import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CepService {
  constructor(private readonly httpService: HttpService) {}

  /*eslint-disable @typescript-eslint/no-explicit-any */
  async validateCep(cep: string): Promise<any> {
    // Validar o formato do CEP
    const cepRegex = /^[0-9]{5}-?[0-9]{3}$/;
    if (!cepRegex.test(cep)) {
      throw new HttpException(
        'Formato do cep inválido',
        HttpStatus.BAD_REQUEST,
      );
    }

    try {
      const response = await firstValueFrom(
        this.httpService.get(`https://viacep.com.br/ws/${cep}/json/`),
      );

      if (response.data.erro) {
        throw new HttpException('CEP não encontrado', HttpStatus.NOT_FOUND);
      }

      return response.data;
    } catch (error) {
      throw new HttpException(
        'Ocorreu um erro ao realizar a busca pelo cep',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
