export function unirObjetos<T, U>(obj1: T, obj2: U): T & U {
  return Object.assign({}, obj1, obj2);
}

const comida = {
  frango: 'S',
  arroz: 'S',
  manteiga: 'N',
  pao: 'N',
  aveia: 'S',
};

const limpeza = {
  frango: 2,
  shampoo: 2,
};

const uniao = unirObjetos(comida, limpeza);
console.log(uniao);
