//quando muitos ou todos os métodos de uma classe precisa de elementos de outra classe para poder operar.
export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  public insertProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  public quantidadeProdutos(): number {
    return this.produtos.length;
  }

  public valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0); //função que soma os preços dos produtos e retorna o total
  }
}

export class Produto {
  constructor(
    public _nome: string,
    public preco: number,
  ) {}

  public get nome() {
    return this._nome;
  }
}

const produto1 = new Produto('Camiseta', 49.9);
const produto2 = new Produto('Boné', 39.9);
const produto3 = new Produto('Jaqueta', 79.9);

const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.insertProdutos(produto1, produto2, produto3);
console.log(carrinhoDeCompras);
console.log(
  `Quantidade de produtos: ${carrinhoDeCompras.quantidadeProdutos()}`,
);
console.log(`Total da compra: ${carrinhoDeCompras.valorTotal()}`);
