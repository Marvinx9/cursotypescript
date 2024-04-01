// & | AND
type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome | TemIdade | TemSobrenome;

// no união type '|' as chaves da constante ficam relachadas e podem ou não ser utilizadas
const pessoa: Pessoa = {
  idade: 24,
  nome: 'Afranio',
};
console.log(pessoa);

// enquanto com o '&' as chaves são obrigatórias para a utulização das tipagens
type TemNome1 = { nome: string };
type TemSobrenome1 = { sobrenome: string };
type TemIdade1 = { idade: number };
type Pessoa1 = TemNome1 & TemIdade1 & TemSobrenome1;

const pessoa1: Pessoa1 = {
  nome: 'Afranio',
  sobrenome: 'Nunes',
  idade: 24,
};
console.log(pessoa1);

// interseção type

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';

type Intersecao = AB & AC & AD;
const inter: Intersecao = {
  AC: 'A',
};
