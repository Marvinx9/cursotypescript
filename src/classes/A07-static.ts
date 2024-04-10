// método que pode ser acessado sem instanciar a classe
// podemos acessar uma classe
export class Pessoa {
  static idadePadrao = 22;
  static cpfPadrao = '111.111.111-11';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
  static criarPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa = new Pessoa('Afranio', 'Nunes', 24, '000.000.000-12');
const pessoa1 = Pessoa.criarPessoa('Alfrino', 'Nunes');
console.log(pessoa);
console.log(pessoa1);
pessoa1.metodoNormal();
// posso acessar as chaves do objeto sem instanciar a classe
console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
