/*
  -- Flags
      g - global (encontra todas as ocorrências)
      i - insensitive
*/
/* eslint-disable @typescript-eslint/no-var-requires */

const { text } = require('./A2-text-data');

const regExp1 = /Teve 5 filhos/i;

// test: verifica se tem um valor dentro de um texto e retorna boolean
console.log(regExp1.test(text)); // return boolean (true or false)
