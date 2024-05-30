//o resultado desse boolean será uma confirmação de que value é um number caso true ou uma negação
//caso false, á isso damos o nome de predicate

export function isNumber(value: unknown): value is number {
  return typeof value === typeof 1;
}

// type T = Required<string | number>;

export function soma<T>(...args: T[] | unknown[]): number | unknown {
  const retorno = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0);
  return retorno;
}

console.log(soma(...['d', 1, 2, 3, 4, 'a']));
