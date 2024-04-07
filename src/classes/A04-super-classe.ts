// 'super' basicamente serve para aproveitar chaves: valor de outras classes principais e incrementar novas //chaves a uma subclasse

export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.cpf = cpf;
  }

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'vem do cliente ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Afrânio', 'Nunes', 30, '000-000-000-00');
const aluno = new Aluno('Afrânio', 'Nunes', 30, '000-000-000-00', '001');
const cliente = new Cliente('Afrânio', 'Nunes', 30, '000-000-000-00');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
