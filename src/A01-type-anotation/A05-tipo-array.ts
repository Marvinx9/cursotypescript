// Array<T> -> genérics
// T[] - tipo de array

export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatArgs(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3);
const concat = concatArgs('a', 'b', 'c');
const upperCase = toUpperCase('a', 'b', 'c');

console.log(result);
console.log(concat);
console.log(upperCase);

export { result };
