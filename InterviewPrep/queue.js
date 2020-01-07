//queue
class Queue {
  constructor() {
    this.arr = []
  }

  add(item) {
    this.arr.unshift(item)
  }

  remove() {
    return this.arr.pop()
  }

  peek() {
    return this.arr[this.arr.length - 1]
  }
}

module.exports = Queue

// const queueOne = new Queue()
// queueOne.add(1)
// queueOne.add(2)
// const queueTwo = new Queue()
// queueTwo.add('Hi')
// queueTwo.add('There')