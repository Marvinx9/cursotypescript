// criando uma estrutura de dados não ordenada
enum Cores {
  VERMELHO = 10,
  AZUL = 100,
  AMARELO = 200,
  ROXO = 'ROXO', // depois de uma chave como string, caso queira continuar a inserir valores na estrutura não ordenada, é preciso incrementar um continuador.
  ROSA = 201,
  PRETO = 'PRETO',
}
function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(201);
