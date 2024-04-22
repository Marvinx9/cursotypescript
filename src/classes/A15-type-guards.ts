export function add(a: unknown, b: unknown): number | string {
  //typeguard
  // se a condição for verdadeira, retorne a + b senão retorne `ab`
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}
console.log(add(2, 1));
console.log(add('a', 'b'));

type Pessoa = { tipo: 'pessoa'; nome: string };
type Animal = { tipo: 'animal'; especie: string };
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  constructor(
    public nome: string,
    public tipo: 'pessoa',
  ) {}
}

export class Especie implements Animal {
  constructor(
    public especie: string,
    public tipo: 'animal',
  ) {}
}

function mostrarNome(obj: PessoaOuAnimal): void {
  // alguns typeguards
  // if (obj instanceof Aluno) console.log(obj.nome);
  //if ('nome' in obj) console.log(obj.nome);
  switch (obj.tipo) {
    case 'pessoa':
      console.log(obj.nome);
      return;
    case 'animal':
      console.log(`Isso é um animal ${obj.especie}`);
  }
}

mostrarNome(new Aluno('Afranio', 'pessoa'));
mostrarNome(new Especie('Primata', 'animal'));
