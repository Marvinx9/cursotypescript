/* eslint-disable @typescript-eslint/no-var-requires */

const { alfabeto } = require('./A1-data');

const regExp1 = /[^abc]+/g;
const regExp2 = /[0-9]/g;
const regExp3 = /[a-l]/g;
const regExp4 = /[a-zA-Z0-9]+/g;
const regExp5 = /[^a-zA-Z0-9]+/g; //negação

console.log(alfabeto.match(regExp1));
console.log(alfabeto.match(regExp2));
console.log(alfabeto.match(regExp3));
console.log(alfabeto.match(regExp4));
console.log(alfabeto.match(regExp5));
