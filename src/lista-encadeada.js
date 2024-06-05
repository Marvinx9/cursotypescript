function No(dado) {
  this.apontador = null; //apontador
  this.dado = dado; //dado
}

function ListaEncadeada() {
  this.cabeca = null;
  this.calda = null;

  this.add = (dado) => {
    const novoDado = new No(dado);
    if (!this.cabeca) {
      this.cabeca = novoDado;
      this.calda = novoDado;
    } else {
      this.calda.apontador = novoDado; //o próximo elemento depois do ultimo seja o novo elemento
      this.calda = this.calda.apontador; //o novo elemento adicionado agora é o ultimo da lista
    }
  };
  this.print = (separator = '->') => {
    const result = [];
    let temp = this.cabeca;
    while (temp) {
      result.push(temp.dado);
      temp = temp.apontador;
    }
    return result.join(separator);
  };
}

const lista = new ListaEncadeada();

lista.add(0);
lista.add(1);
lista.add(2);
console.log(lista.print());
