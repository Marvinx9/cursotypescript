// criando classes e utilizando herança para realizar o desafio

interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto(): string;
}

type TipoPessoa1 = TipoNome & TipoSobrenome & TipoNomeCompleto;
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

export class Pessoa1 implements TipoPessoa1 {
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}

  nomeCompleto(): string {
    return `Nome completo da pessoa1: ${this.nome} ${this.sobrenome}`;
  }
}

export class Pessoa2 implements TipoPessoa2 {
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}

  nomeCompleto(): string {
    return `Nome completo da pessoa2: ${this.nome} ${this.sobrenome}`;
  }
}
const pessoa1 = new Pessoa1('Afrânio', 'Dantas');
console.log(pessoa1.nomeCompleto());

const pessoa2 = new Pessoa2('André', 'Santos');
console.log(pessoa2.nomeCompleto());
