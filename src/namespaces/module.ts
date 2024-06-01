/* eslint-disable @typescript-eslint/no-namespace */

namespace MeuNameSpace {
  export class PessoaDoNameSpace {
    constructor(public nome: string) {}
  }

  export namespace OutroNameSpace {
    export const nomeDoNameSpace = 'Lá-ele';
  }
}

const pessoaEscopo = new MeuNameSpace.PessoaDoNameSpace('Afranin');
console.log(pessoaEscopo);
console.log(MeuNameSpace.OutroNameSpace.nomeDoNameSpace);
