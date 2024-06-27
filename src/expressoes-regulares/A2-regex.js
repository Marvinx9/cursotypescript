/*
  -- Flags
      -- g - global (encontra todas as ocorrências)
      -- i - insensitive
      -- test - return boolean (true or false) if found text
      -- exec - return text search, index of param in text and text input
      -- () - use for group text
      -- | ou
*/

/* eslint-disable @typescript-eslint/no-var-requires */

const { text } = require('./A1-data');
// const regExp1 = /Teve 5 filhos/i;
// //test: verifica se tem um valor dentro de um texto e retorna boolean
// console.log(regExp1.test(text));
// console.log(regExp1.exec(text).index);
//---------------------------------------------------------------------
// const regExp1 = /(Teve) (5 filhos)/i;
// const found = regExp1.exec(text);
// console.log('found[0]', found[0]); //return all expression
// console.log('found[1]', found[1]); //return left expression
// console.log('found[2]', found[2]); //return right expression
//----------------------------------------------------------------------
const regExp1 = /(maria|João|luiz)(, hoje sua esposa)/i; //if not found, return an throw by default
const found = regExp1.exec(text);
console.log('found[0]', found[0]);
console.log('found[1]', found[1]);
console.log('found[2]', found[2]);
