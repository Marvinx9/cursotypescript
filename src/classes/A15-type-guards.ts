import { Pessoa } from './A03-heranca';

export function add(a: unknown, b: unknown): number | string {
  //typeguard
  // se a condição for verdadeira, retorne a + b senão retorne `ab`
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}
console.log(add(2, 1));
console.log(add('a', 'b'));

type Pessoa = { nome: string };
type Animal = { especie: string };
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  constructor(public nome: string) {}
}

function mostrarPessoa(obj: PessoaOuAnimal): void {
  return 'nome' in obj ? obj.nome : obj.especie;
}
