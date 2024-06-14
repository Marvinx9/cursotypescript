//match return an array with value found
/* pode ocorrer casos em que eu tenha que pegar valores dentro de um grupo específico
(.1.(.2.))(.3.)(.4.)  $1 $2 $3 $4 a sequência se mantém na ordem de leitura */
/* eslint-disable @typescript-eslint/no-var-requires */

const { text } = require('./A2-text-data');
const regExp1 = /João|maria/gi;
console.log(text);
console.log(text.match(regExp1));
// console.log(text.replace(/João|Maria/gi, 'Afrânio'));

// console.log(text.replace(/(João|Maria)/gi, '<b>$1</b>'));
console.log(
  text.replace(/(João|Maria)/gi, function (input) {
    return '##' + input.toUpperCase() + '##';
  }),
);
