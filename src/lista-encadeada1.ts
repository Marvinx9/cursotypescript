export class Node<T> {
  public data: T;
  public next: Node<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedList<T> {
  private head: Node<T> | null;

  constructor() {
    this.head = null;
  }

  append(value: T) {
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

  toArray(): T[] {
    const result: T[] = [];
    let current = this.head;
    while (current !== null) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }

  getPosition(position: number): T | null {
    if (position < 0) {
      return null;
    }

    let current = this.head;
    let index = 0;

    while (current !== null && index < position) {
      current = current.next;
      index++;
    }
    return current ? current.data : null;
  }

  reverse() {
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

const linkedList = new LinkedList();
linkedList.append(2);
linkedList.append(4);
linkedList.append(6);
linkedList.append(8);
linkedList.append(10);
linkedList.append(12);
linkedList.reverse();

console.log(linkedList.toArray());
// console.log(linkedList.getPosition(3));
