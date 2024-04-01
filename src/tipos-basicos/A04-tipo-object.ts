// pode tentar utilizar 'Record<string, unknown>' porém é pouco seguro e tem uma maneira melhor
// tipos de objetos definidos podem ter em seu corpo o incremento de novas chaves desde que se use da forma abaixo
// readonly não permite alterar o valor de uma chave

const objetoA: {
  chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'valor A',
  chaveB: 'valorB',
};

objetoA.chaveA = 'outro valor';
objetoA.chaveB = 'Nova chave';
objetoA.chaveD = 'Criando outra chave';
