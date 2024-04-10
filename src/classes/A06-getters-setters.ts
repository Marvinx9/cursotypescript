// com o getter eu posso disponibilizar acesso a atributos privados por meio de um método público.
// com o getter eu posso ter acesso a informações privadas do lado de fora da classe e posso até modificar/tratar essas informações da maneira que eu desejar.
// é interessante porque eu posso modificar informações privadas sem comprometer dados que possam ser quebrados mais para frente
export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private cpf: string,
  ) {}

  getCpf(): string {
    return this.cpf.replace(/\D/g, '');
  }

  setCpf(valor: string): void {
    this.cpf = valor;
  }
}

const pessoa = new Pessoa('Afrânio', 'Dantas', 24, '123.456.789-10');
//valores formatados no getter
console.log(pessoa.getCpf());
pessoa.setCpf('111.222.333.12');
//novos valores inseridos no setter
console.log(pessoa.getCpf());
