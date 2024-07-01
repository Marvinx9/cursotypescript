/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
// simbolo: '^'  -começa com

const { cpfs, ips } = require('./A1-data');

const regExp1 = /[0-9{3,3}]+.[0-9{3,3}]+.[0-9{3,3}]+-[0-9{2,2}]+/g;
const regExp2 = /\d{3}\.\d{3}\.\d{3}-\d{2}/g;
const regExp3 = /(\d{3}\.){2}\d{3}-\d{2}/g;
const regExp4 = /[0-9{1,3}]+.[0-9{1,3}]+.[0-9{1,3}]+.[0-9{1,3}]+/g;

//--------------------------------
// console.log(cpfs);
// console.log('cpfs separados', cpfs.match(regExp1));
// console.log('cpfs separados', cpfs.match(regExp2));
// console.log('cpfs separados', cpfs.match(regExp3));
//--------------------------------
// 25[0-5] -pega entre (250 - 255)
// 2[0-4][0-9] -pega entre (200 - 249)
// 1\d{2} -pega entre (100-199)
// [1-9]\d -pega entre (10-99)
// \d -pega entre (0-9)
const regExp5 =
  /^((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

for (let i = 0; i <= 300; i++) {
  const ip = `${i}.${i}.${i}.${i}`;
  console.log(ip, ip.match(regExp5));
}
// console.log(ips);
// console.log('ips separados', ips.match(regExp4));
