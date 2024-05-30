// pilha FIFO (primeiro a entrar, primeiro a sair)

export class Stack<T> {
  private contador = 0;
  private elemento: { [key: number]: T } = {}; //index signture

  push(elemento: T): void {
    this.elemento[this.contador] = elemento;
    this.contador++;
  }

  pop(): T | void {
    if (this.isNull()) return undefined;

    this.contador--;
    const elemento = this.elemento[this.contador];
    delete this.elemento[this.contador];
    return elemento;
  }

  tamanho(): number {
    return this.contador;
  }

  mostrarStack(): void {
    for (const item in this.elemento) {
      console.log(this.elemento[item]);
    }
  }

  isNull(): boolean {
    return this.contador === 0;
  }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop();

stack.mostrarStack();
