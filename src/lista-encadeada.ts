/*
no que aponta para outro nó e assim até encontrar um nó que aponta para nada
  - listas encadeadas ou (linked list), estão intimamente associadas á alocação de memória.
  - funções get position e revert na lista encadeada
  Cada nó, contém um valor e um ponteiro para o próximo nó na sequência.
  Eficiente para inserção e remoção de elementos em comparação com arrays,
  especialmente para grandes conjuntos de dados.
  vantagens:
  Não é necessário especificar o tamanho da lista antecipadamente, ela pode
  crescer dinamicamente conforme necessário.
  desvantagens:
  Acesso aleatório aos elementos é menos eficiente do que em arrays, pois
  requer uma busca sequencial a partir do início da lista.
  Requer mais memória devido à necessidade de armazenar referências para cada nó.
  */

export class Node<T> {
  public value: T;
  public next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList<T> {
  private head: Node<T> | null;

  constructor() {
    this.head = null;
  }

  public append(value: T): void {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  public toArray(): T[] {
    const result: T[] = [];
    let current = this.head;
    while (current !== null) {
      result.push(current.value);
      current = current.next;
      // result.reverse();
    }
    return result;
  }
  public getPosition(position: number): T | null {
    if (position < 0) {
      return null;
    }
    let current = this.head;
    let index = 0;
    while (current !== null && index < position) {
      current = current.next;
      index++;
    }
    return current ? current.value : null;
  }

  public reverse(): void {
    let prev = null;
    let current = this.head;
    let next = null;
    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
}

const linkedList = new LinkedList<number>();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

console.log('insert linked lint', linkedList.toArray());
console.log('get position', linkedList.getPosition(1));

linkedList.reverse();
console.log('revert linkd list', linkedList.toArray());
