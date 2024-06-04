/*
  ---- Exemplos de ----
- busca binária ----
*/

import { indexOf } from 'lodash';

export class BinarySearch {
  startElement() {
    return 0;
  }

  endElement() {
    return array.length - 1;
  }

  binarySearch(
    array: number[],
    start: number,
    end: number,
    value: number,
  ): number | string {
    if (start > end) {
      return 'Element not found in array';
    }
    const meddle = Math.floor((start + end) / 2);
    if (array[meddle] === value) {
      return meddle;
    }

    if (array[meddle] > value) {
      return this.binarySearch(array, start, meddle - 1, value);
    } else {
      return this.binarySearch(array, meddle + 1, end, value);
    }
  }
}

const array = [1, 2, 5, 6, 7, 8, 10, 12, 13, 14, 20, 32, 56];
const value = 12;
const binarySearch = new BinarySearch();
const start = binarySearch.startElement();
const end = binarySearch.endElement();
const result = binarySearch.binarySearch(array, start, end, value);
console.log(result);

/*
  - listas encadeadas ou (linked list), estão intimamente associadas á alocação de memória.
  - funções get position e revert na lista encadeada
*/
//retorna a posição de um elemento na lista

function Node(data: number) {
  this.next = null;
  this.data = data;
}
function LinkedList() {
  this.root = null;
  this.tail = null;

  this.add = (data: number) => {
    const newData = new Node(data);
    if (!this.root) {
      this.root = newData;
      this.tail = newData;
    } else {
      this.tail.next = newData;
      this.tail = this.tail.next;
    }
  };
  this.print = (separator = '->') => {
    const result = [];
    let temp = this.root;
    while (temp) {
      result.push(temp.data);
      temp = temp.next;
    }
    return result.join(separator);
  };
}

const list = new LinkedList();

list.add(0);
list.add(1);
list.add(2);
console.log(list.print);
