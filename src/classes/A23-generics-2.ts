interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno1: PessoaProtocolo<string, number> = {
  nome: 'Afrânio',
  sobrenome: 'Dantas',
  idade: 24,
};

const aluno2: PessoaProtocolo<number, string> = {
  nome: 123,
  sobrenome: 456,
  idade: 'vinte-e-quatro',
};

const aluno3: PessoaProtocolo = {
  nome: 'Afrânio',
  sobrenome: 'Dantas',
  idade: 24,
};

console.log(aluno1);
console.log(aluno2);
console.log(aluno3);
