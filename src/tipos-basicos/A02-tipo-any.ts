// any pode receber numeros, strings, arrays etc sem apresentar problema de tipagem
// utilizar any apenas em ultimo caso

function showMessage(msg: any) {
  return msg;
}
console.log(showMessage([1, 2, 3]));
console.log(showMessage('Olá'));
console.log(showMessage(1));
