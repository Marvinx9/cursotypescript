//tipo do construtor da classe
/* eslint-disable @typescript-eslint/no-explicit-any */
type Constructor = new (...args: any[]) => any;

//Classes
function decoratorDeClasse(constructor: Constructor): any {
  //chamado na criação da classe
  console.log('classe');
  console.log(constructor);
  console.log('###');
}

//método de instância (normal)
function decoratorDeMetodo(
  prototipoDaClasse: any,
  nomeDoMetodo: string,
  descricaoDePropriedade: PropertyDescriptor,
): any {
  //chamado na criação do método (não precisa chamar o método)
  console.log('metodo normal');
  console.log(prototipoDaClasse);
  console.log(nomeDoMetodo);
  console.log(descricaoDePropriedade);
  console.log('###');
}

//método estático
function decoradorDeMetodoEstatico(
  classConstructor: Constructor,
  nomeDoMetodo: string,
  descritorDePropriedade: PropertyDescriptor,
): any {
  //chamado na criação do método (não precisa chamar o método)
  console.log('metodo estático');
  console.log(classConstructor);
  console.log(nomeDoMetodo);
  console.log(descritorDePropriedade);
  console.log('###');
}

//parâmetro de método
function decoratorDeParametroDeMetodo(
  prototipoDaClasse: any,
  nomeDoMetodo: string,
  indiceDaPropriedade: number,
): any {
  //chamado na criação do método
  console.log('parâmetro de método');
  console.log(prototipoDaClasse);
  console.log(nomeDoMetodo);
  console.log(indiceDaPropriedade);
  console.log('###');
}

//parâmetro de método
function decoratorDeParametroDeMetodoEstatico(
  prototipoDaClasse: any,
  nomeDoMetodo: string,
  indiceDaPropriedade: number,
): any {
  //chamado na criação do método
  console.log('parâmetro de método estático');
  console.log(prototipoDaClasse);
  console.log(nomeDoMetodo);
  console.log(indiceDaPropriedade);
  console.log('###');
}

//propriedade
function decoratorDePropriedade(
  prototipoDaClasse: any,
  nomePropriedade: string,
): any {
  //chamado na criação da propriedade
  console.log('parâmetro de propriedade');
  console.log(prototipoDaClasse);
  console.log(nomePropriedade);
  console.log('###');
}

//propriedade estática
function decoratorDePropriedadeEstatica(
  classConstructor: Constructor,
  nomePropriedade: string,
): any {
  //chamado na criação da propriedade estática
  console.log('parâmetro de propriedade estática');
  console.log(classConstructor);
  console.log(nomePropriedade);
  console.log('###');
}

//getter and setter
function decoradorDeGetterESetterNormal(
  prototipoDaClasse: any,
  nomePropriedade: string,
  descricaoDePropriedade: PropertyDescriptor,
): any {
  //chamado na criação do método
  //(só pode ser aplicado no getter ou no setter - não em ambos)
  console.log('getter/setter normal');
  console.log(prototipoDaClasse);
  console.log(nomePropriedade);
  console.log(descricaoDePropriedade);
  console.log('###');
}

//getter and setter estático
function decoradorDeGetterESetterEstatico(
  classConstructor: Constructor,
  nomePropriedade: string,
  descricaoDePropriedade: PropertyDescriptor,
): any {
  //chamado na criação do método estático
  //(só pode ser aplicado no getter ou no setter - não em ambos)
  console.log('getter/setter estático');
  console.log(classConstructor);
  console.log(nomePropriedade);
  console.log(descricaoDePropriedade);
  console.log('###');
}

// A classe e o uso dos decorators
@decoratorDeClasse
export class UmaPessoa {
  @decoratorDePropriedade
  nome: string;
  sobrenome: string;
  idade: number;

  @decoratorDePropriedadeEstatica
  static propriedadeEstatica = '';

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  @decoratorDeMetodo
  metodo(@decoratorDeParametroDeMetodo msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  @decoradorDeMetodoEstatico
  static metodoEstatico(
    @decoratorDeParametroDeMetodoEstatico msg: string,
  ): string {
    return UmaPessoa.propriedadeEstatica + msg;
  }

  @decoradorDeGetterESetterNormal
  get nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }

  @decoradorDeGetterESetterEstatico
  static get staticPropertyGetterESetter(): string {
    return UmaPessoa.propriedadeEstatica;
  }

  static set staticPropertyGetterSetter(value: string) {
    UmaPessoa.propriedadeEstatica = value;
  }
}
