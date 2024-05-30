/*criar duas classes
classe 1 - contém método que adiciona opções para serem votadas
classe 1 - contém método que realiza um push para contar a quantidade de votos para cada opção, caso a opção exista
classe 1 - método para retornar todas as opções votadas

classe 2 -
*/

type VotationOption = {
  option: string;
  numberOfVotes: number;
};

export class Votation {
  private _votationOptions: VotationOption[] = [];
  constructor(public details: string) {}

  addVotetionOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfVotes += 1;
  }

  get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations() {
    for (const votation of this.votations) {
      console.log(votation.details);
      for (const votationOption of votation.votationOptions) {
        console.log(votationOption.option, votationOption.numberOfVotes);
      }
      console.log('###');
      console.log('');
    }
  }
}

const votation1 = new Votation('Qual a sua linguagem de programação favorita?');
votation1.addVotetionOption({ option: 'Python', numberOfVotes: 0 });
votation1.addVotetionOption({ option: 'JavaScript', numberOfVotes: 0 });
votation1.addVotetionOption({ option: 'TypeScript', numberOfVotes: 0 });
votation1.vote(1);
votation1.vote(0);
votation1.vote(0);
votation1.vote(0);
votation1.vote(2);
votation1.vote(2);

const votation2 = new Votation('Qual sua cor favorita?');
votation2.addVotetionOption({ option: 'Vermelho', numberOfVotes: 0 });
votation2.addVotetionOption({ option: 'Verde', numberOfVotes: 0 });
votation2.addVotetionOption({ option: 'Azul', numberOfVotes: 0 });
votation2.vote(1);
votation2.vote(0);
votation2.vote(0);
votation2.vote(2);
votation2.vote(2);
votation2.vote(2);

const votationApp = new VotationApp();
votationApp.addVotation(votation1);
votationApp.addVotation(votation2);

votationApp.showVotations();
