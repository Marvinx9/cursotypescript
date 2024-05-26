// import { minhaFuncaoAsync } from './minhaFuncaoAsync';
// Função assíncrona que simula uma operação que leva algum tempo para completar

export async function minhaFuncaoAsync(): Promise<string> {
  // Simula um atraso usando setTimeout dentro de uma Promise
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Operação assíncrona concluída');
    }, 2000); // 2 segundos de atraso
  });
} // main.ts

// Função principal que chamará a função assíncrona
async function executar() {
  try {
    console.log('Chamando a função assíncrona...');
    const resultado = await minhaFuncaoAsync();
    console.log(resultado);
  } catch (error) {
    console.error('Erro ao executar a função assíncrona:', error);
  }
}

// Executa a função principal
executar();

// minhaFuncaoAsync.ts
