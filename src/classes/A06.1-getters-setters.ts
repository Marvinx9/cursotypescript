export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {}

  //método para utilizar o setter
  set cpf(cpf: string) {
    console.log('SETTER CHAMADO');
    this._cpf = cpf;
  }

  //trocando tudo que não for número por vazio
  get cpf(): string {
    console.log('GETTER CHAMADO');

    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Afranio', 'Nunes', 24, '000.000.000-12');
pessoa.cpf = '000.123.489-00';
console.log(pessoa.cpf);
