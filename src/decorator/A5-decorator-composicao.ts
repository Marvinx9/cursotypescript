//passagem de parâmetros para decorators
//nesse caso minha função 'inverteNomeECor', retorna uma função anonima
//que é o meu próprio decorador. E retorno uma classe anonima que está estendendo
//a classe Pessoa
interface Constructor {
  new (...args: any[]): any;
}

function invertNomeECor(param1: string, param2: string) {
  // Closure
  return function <T extends Constructor>(value: T) {
    return class extends value {
      name: string;
      color: string;
      constructor(...args: any[]) {
        super(...args);
        this.name = this.inverter(args[0]);
        this.color = this.inverter(args[1]);
      }

      inverter(value: string): string {
        return value.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }

      isNumber(value: unknown): value is number {
        return typeof value === typeof 1;
      }
    };
  };
}

function outroDecorador(target: Constructor): void {
  target.length;
  console.log('Sou o segundo decorador');
}

@outroDecorador
@invertNomeECor('Valor1', 'Valor2')
export class Pessoa {
  constructor(
    public name: string,
    public color: string,
  ) {}
}

const pessoa = new Pessoa('Afranio', 'pardo');
console.log(pessoa);
