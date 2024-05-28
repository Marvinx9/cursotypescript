type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'Rosa',
  vacinas: ['vacina1', 'vacina2'],
  idade: 2,
};

const vacinas = obterChave(animal, 'vacinas');
const cor = obterChave(animal, 'cor');
const idade = obterChave(animal, 'idade');
console.log(vacinas, cor, idade);
