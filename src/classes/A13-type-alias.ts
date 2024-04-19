// criando classes e utilizando herança para realizar o desafio

type TipoNome = {
  nome: string;
};

type TipoSobrenome = {
  sobrenome: string;
};

type TipoNomeCompleto = {
  nomeCompleto(): string;
};
export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Afrânio', 'Dantas');
console.log(pessoa.nomeCompleto());
