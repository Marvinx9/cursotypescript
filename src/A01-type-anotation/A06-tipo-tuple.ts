// Arrays imutáveis ' no typescript é imutável o seu tipo 'TUPLE'
const dadosCliente1: [number, string] = [1, 'Luiz'];
const dadosCliente2: [number, string, string?] = [1, 'Luiz'];
const dadosCliente3: [number, string, ...string[]] = [1, 'Luiz']; // rest operator

dadosCliente1[0] = 100;
dadosCliente1[1] = 'Carlos';
dadosCliente3[0] = 1;
dadosCliente3[1] = 'Carlos';
dadosCliente3[2] = 'Santos';
dadosCliente3[3] = 'Nunes';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);

//readonly array
const array1: readonly string[] = ['Luiz', 'Otávio'];
const array2: ReadonlyArray<string> = ['Luiz', 'Otávio'];

console.log(array1);
console.log(array2);
