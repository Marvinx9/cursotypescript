// tenho uma classe e desejo modificar ela por meio de um decorator
@decorator
export class Pessoa {
  constructor(
    public name: string,
    public age: number,
    public color: string,
  ) {}
}

function decorator<T extends new (...args: any[]) => any>(value: T) {
  return class extends value {
    name: string;
    age: number;
    color: string;
    constructor(...args: any[]) {
      super(...args);
      this.name = this.inverter(args[0]);
      this.age = this.inverter(args[1]);
      this.color = this.inverter(args[2]);
    }

    inverter(value: string): string {
      if (this.isNumber(value)) return value;
      return value.split('').reverse().join('');
    }

    isNumber(value: unknown): value is number {
      return typeof value === typeof 1;
    }
  };
}

const pessoa = new Pessoa('Afranio', 24, 'pardo');
console.log(pessoa);
