//match return an array with value found

/* eslint-disable @typescript-eslint/no-var-requires */

const { text } = require('./A2-text-data');
const regExp1 = /João|maria/gi;
console.log(text);
console.log(text.match(regExp1));
console.log(text.replace(/João/i, 'Afrânio'));
