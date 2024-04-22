let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

// quando eu preciso receber valores desconhecidos na minha função, como o uma string ou number. Eu posso realizar uma validação para ter a certeza do seu tipo.
// e depois fazer algo com esses valores
export function squareof(x: any) {
  if (x === 'number') return x * x;
  return null;
}

const squareOfTwoNumber = squareof(2);
const squareOfTwoString = squareof('2');

if (squareOfTwoNumber === null) {
  console.log('Conta inválida');
} else {
  console.log(squareOfTwoNumber * 100);
}

if (squareOfTwoString === null) {
  console.log('Valor não encontrado');
} else {
  console.log(squareOfTwoString + 'é string');
}
