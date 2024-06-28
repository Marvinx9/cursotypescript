/* eslint-disable @typescript-eslint/no-var-requires */

const { cpfs, ips } = require('./A1-data');

const regExp1 = /[0-9{3,3}]+.[0-9{3,3}]+.[0-9{3,3}]+-[0-9{2,2}]+/g;
const regExp2 = /[0-9{1,3}]+.[0-9{1,3}]+.[0-9{1,3}]+.[0-9{1,3}]+/g;

//--------------------------------
console.log(cpfs);
console.log('cpfs separados', cpfs.match(regExp1));
//--------------------------------
console.log(ips);
console.log('ips separados', ips.match(regExp2));
