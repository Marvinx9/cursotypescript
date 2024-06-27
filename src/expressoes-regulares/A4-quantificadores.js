/* eslint-disable @typescript-eslint/no-var-requires */

// * (opcional) 0 ou n
// + (obrigatorio) 1 ou n
// ? * (opcional) 0 ou 1

const { text } = require('./A1-data');

console.log(text);

const regExp1 = /Jo+ão+/gi;

console.log(text.match(regExp1));
