// É basicamente um any porém mais seguro, porque ele não permite fazer algo com um valor se ele não for devidamente checado quanto ao seu tipo
let x: unknown;

x = 100;
x = 'Luiz';
x = 900;
x = 10;
const y = 800;

//console.log(x + y);
if (typeof x === 'number') console.log(x + y);
