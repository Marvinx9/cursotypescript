// Quando a função nunca retorna nada
export function criaErro(): never {
  throw new Error('Erro qualquer');
}

criaErro();
