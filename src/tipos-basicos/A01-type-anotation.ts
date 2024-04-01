/* eslint-disable */

// tipos básicos ( aqui ocorre inferência de tipos)
let nome: string = 'Luiz';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');

// Arrays
let arrayofNumbers: Array<number> = [1, 2, 3];
let arrayofNumbers2: number[] = [1, 2, 3];
let arrayofStrings: Array<string> = ['a', 'b', 'c'];
let arrayofStrings2: string[] = ['a', 'b', 'c'];

// Objects
export let pessoa: {nome:string, idade: number, adulto?: boolean} = {
  nome: 'Afranio',
  idade: 24
};

// Functions
function soma(x: number, y: number): number {
  return x + y;
}
const result = soma(2,2)

const soma2: (x: number, y: number) => number = (x, y) => x + y;
