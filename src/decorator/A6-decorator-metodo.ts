//pode ser usado para alterar métodos caso seja nescessário

function decorator(
  classPrototype: any,
  nomeMetodo: string,
  descriptor: PropertyDecorator,
): PropertyDecorator | void {
  console.log(classPrototype);
  console.log(nomeMetodo);
  console.log(descriptor);
}

export class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  @decorator
  metodo(msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }
}

const pessoa = new UmaPessoa('Afranio', 'Dantas', 24);
const metodo = pessoa.metodo('olá mundo!');
console.log(metodo);
