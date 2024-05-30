//o decorator é chamado primeiro e recebe em target a classe 'Animal',
//depois, no contrutor do decorator são chamados por super os construtores
//da classe Animal para dentro do contrutor do decorator e então o decorator
//pode alterar os valores de uma classe caso seja o código peça.
function invertNomeECor<T extends new (...args: any[]) => any>(target: T) {
  console.log('sou o decorador e recebi', target);

  return class extends target {
    nome: string;
    cor: string;

    constructor(...args: any[]) {
      super(...args);
      this.nome = this.inverte(args[0]);
      this.cor = this.inverte(args[1]);
    }
    inverte(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}

@invertNomeECor
export class Animal {
  constructor(
    public nome: string,
    public cor: string,
  ) {
    console.log('sou a classe');
  }
}

const animal = new Animal('Afranio', 'azul');
console.log(animal);
