class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.size++;
  }
  append(value) {
    if (this.isEmpty()) return this.prepend(value);
    const node = new Node(value);
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    this.size++;
  }
  insert(value, index) {
    if (index < 0 || index > this.size) return;
    if (index === 0) return this.prepend(value);
    const node = new Node(value);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    node.next = current.next;
    current.next = node;
    this.size++;
  }
  removeFrom(index) {
    if (index < 0 || index >= this.size) return null;
    if (index === 0) {
      const removedNode = this.head;
      this.head = removedNode.next;
      this.size--;
      return removedNode.value;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    const removedNode = current.next;
    current.next = removedNode.next;
    this.size--;
    return removedNode.value;
  }
  removeValue(value) {
    if (this.isEmpty()) return null;
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    }
    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
      this.size--;
      return value;
    }
    return null;
  }
  search(value) {
    if (this.isEmpty()) return -1;
    let index = 0;
    let current = this.head;
    while (current) {
      if (current.value === value) return index;
      current = current.next;
      index++;
    }
    return -1;
  }
  reverse() {
    let previous = null;
    current = this.head;
    while (current) {
      let next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head = previous;
  }
  print() {
    if (this.isEmpty()) return console.log("List is empty");
    let current = this.head;
    const listValues = [];
    while (current) {
      listValues.push(current.value);
      current = this.next;
    }
    console.log(listValues);
  }
}

const singlyLinkedList = new SinglyLinkedList();
