//quando muitos ou todos os métodos de uma classe precisa de elementos de outra classe para poder operar.
export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  insertProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(
    public nome: string,
    public preco: number,
  ) {}
}

const produtos1 = new Produto('Camisa', 17.99);
const produtos2 = new Produto('Short', 19.99);
const produtos3 = new Produto('Sapato', 20.99);

const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.insertProdutos(produtos1, produtos2, produtos3);
console.log(carrinhoDeCompras);
console.log(`valor total: ${carrinhoDeCompras.valorTotal()}`);
console.log(`quantidade total: ${carrinhoDeCompras.quantidadeProdutos()}`);
