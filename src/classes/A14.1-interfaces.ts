// Declaration merge, pode-se criar duas interfaces de mesmo nome com atributos diferentes

interface Gente {
  nome: string;
}

interface Gente {
  readonly sobrenome: string;
}

interface Gente {
  readonly endereco: readonly string[];
}

interface Gente {
  readonly idade?: number;
}

export const pessoa: Gente = {
  nome: 'Afranio',
  sobrenome: 'Dantas',
  endereco: ['Cidade Ecológica'],
};

console.log(pessoa);
