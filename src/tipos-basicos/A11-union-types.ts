//string | number | boolean
// para tipar uma função com mais de um tipo, os argumentos da função devem ser verificadas para que o tipescript permita sua utilização de forma correta
function addOrConcat(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(10, 20));
console.log(addOrConcat('10', '20'));
console.log(addOrConcat('10', 20));
console.log(addOrConcat(10, '20'));
