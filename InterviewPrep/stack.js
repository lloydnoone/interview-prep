//stack
class Stack {
  constructor() {
    this.arr = []
  }

  add(item) {
    this.arr.push(item)
  }

  remove() {
    return this.arr.pop()
  }

  peek() {
    return this.arr[this.arr.length - 1]
  }
}

module.exports = Stack