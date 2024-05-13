// criando algo para traduzir cores
type CoresObj = typeof coresObj;
type CoresChave = keyof CoresObj;

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  amarelo: 'yellow',
};

function traduzirCor(cor: CoresChave, cores: CoresObj) {
  return cores[cor];
}

console.log(traduzirCor('vermelho', coresObj));
console.log(traduzirCor('verde', coresObj));
console.log(traduzirCor('azul', coresObj));
console.log(traduzirCor('amarelo', coresObj));
