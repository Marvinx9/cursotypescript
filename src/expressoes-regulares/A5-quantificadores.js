/* eslint-disable @typescript-eslint/no-var-requires */

const { html } = require('./A1-data');

const regExp1 = /<.+>.+<\/.+>/g; //greedy
const regExp2 = /<.+?>.+?<\/.+?>/g; // non-greedy

console.log(html.match(regExp1));
console.log(html.match(regExp2));
