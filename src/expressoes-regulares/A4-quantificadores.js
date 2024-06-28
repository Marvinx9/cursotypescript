/* eslint-disable @typescript-eslint/no-var-requires */

// * (opcional) 0 ou n {0,}
// + (obrigatorio) 1 ou n {1,}
// ? (opcional) 0 ou 1 {0,1}
// \ caractere de escape
// {n, m} mínimo e máximo

const { text, arquivos } = require('./A1-data');

console.log(text);

// const regExp1 = /Jo+ão+/gi;

// console.log(text.match(regExp1));

const regExp2 = /\.(jpg|jpeg)/gi;
const regExp3 = /\.jpe?g/gi;

for (const arquivo of arquivos) {
  console.log(arquivo, arquivo.match(regExp2), arquivo.match(regExp3));
}
