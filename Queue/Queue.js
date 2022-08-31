class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    return this.items.shift();
  }
  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    return this.isEmpty() ? null : this.items[0];
  }
  size() {
    return this.items.length();
  }
  print() {
    console.log(this.items);
  }
}
const queue = new Queue();

/* Queue Optimized */
class Queue2 {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(element) {
    this.items[this.tail] = element;
    this.tail++;
  }
  dequeue() {
    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }
  isEmpty() {
    return this.tail - this.head === 0;
  }
  peek() {
    return this.items[this.head];
  }
  size() {
    return this.rear - this.front;
  }
  print() {
    console.log(this.items);
  }
}
const queue2 = new Queue2();
