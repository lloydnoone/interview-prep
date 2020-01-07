const Stack = require('./stack')

//queue from stack
// class Queue {
//   constructor() {
//     this.stackOne = new Stack()
//     this.stackTwo = new Stack()
//     this.insertOne = true
//     this.removeFromOne = true
//   }

//   add(item) {
//     this.insertOne ? this.stackOne.add(item) : this.stackTwo.add(item)
//     this.insertOne = !this.insertOne
//   }

//   remove() {
//     const record =  this.removeFromOne ? this.stackOne.remove() : this.stackTwo.remove()
//     this.removeFromOne = !this.removeFromOne
//     return record
//   }

//   peek() {
//     const record = this.removeFromOne ? this.stackOne.peek() : this.stackTwo.peek()
//     return record
//   }
// }

//solution 2
class Queue {
  constructor() {
    this.first = new Stack()
    this.second = new Stack()
  }

  add(record) {
    this.first.add(record)
  }

  remove() {
    while (this.first.peek()) {
      this.second.add(this.first.remove())
    }

    const record = this.second.remove()

    while (this.second.peek()) {
      this.first.add(this.second.remove())
    }

    return record
  }

  peek() {
    while (this.first.peek()) {
      this.second.add(this.first.remove())
    }

    const record = this.second.peek()

    while (this.second.peek()) {
      this.first.add(this.second.remove())
    }

    return record
  }
}

const q = new Queue()
q.add(1)
q.add(2)
console.log(q.peek())
console.log(q.remove())
console.log(q.remove())
