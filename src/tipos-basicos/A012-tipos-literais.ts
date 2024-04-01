// x pode ser alterado por outro valor do mesmo tipo
let x = 10; // eslint-disable-line
x = 0b1010;
//x = 'Luiz';
console.log(x);

const y = 10; // y só pode ser 10 porque ele é constante
console.log(y);

const a = 100 as const;
console.log(a);

export const pessoa = {
  nome: 'Afranio' as const,
  sobrenome: 'Nunes',
};
console.log(pessoa.nome);

//pessoa.nome = 'adf';

function escolhaCor(cor: 'vermelho' | 'amarelo' | 'azul'): string {
  return cor;
}
console.log(escolhaCor('vermelho'));
// Module mode
export default 1;
