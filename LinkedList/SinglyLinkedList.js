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
    if (this.isEmpty()) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let previous = this.head;
      while (previous.next) {
        previous = previous.next;
      }
      previous.next = node;
      this.size++;
    }
  }
  insert(value, index) {
    if (index < 0 || index > this.size) return;
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let previous = this.head;
      for (let i = 0; i < index - 1; i++) {
        previous = previous.next;
      }
      node.next = previous.next;
      previous.next = node;
      this.size++;
    }
  }
  removeFrom(index) {
    if (index < 0 || index >= this.size) return null;
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = removedNode.next;
    } else {
      let previous = this.head;
      for (let i = 0; i < index - 1; i++) {
        previous = previous.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }
  removeValue(value) {
    if (this.isEmpty()) return null;
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let previous = this.head;
      while (previous.next && previous.next.value !== value) {
        previous = previous.next;
      }
      if (previous.next) {
        removedNode = previous.next;
        previous.next = removedNode.next;
        this.size--;
        return value;
      }
      return null;
    }
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
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let current = this.head;
      const listValues = [];
      while (current) {
        listValues.push(current);
        current = this.next;
      }
      console.log(listValues);
    }
  }
}

const singlyLinkedList = new SinglyLinkedList();
