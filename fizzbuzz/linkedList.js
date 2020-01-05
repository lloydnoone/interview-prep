//linkedList
class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(data) {
    this.head = new Node(data, this.head)
  }

  size() {
    let counter = 0
    let node = this.head
    while (node) {
      counter++
      node = node.next
    }
    return counter
  }

  getFirst() {
    return this.head
  }

  getLast() {
    let node = this.head
    if (!node) return null
    while (node) {
      if (!node.next) return node
      node = node.next
    }
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    if (!this.head) return null
    this.head = this.head.next
  }

  removeLast() {
    if (!this.head) return null
    if (!this.head.next) this.head = null
    let previous = this.head
    let node = this.head.next
    while (node) {
      if (!node.next) return previous.next = null
      previous = node
      node = node.next
    }
  }

  insertLast(data) {
    this.getLast() ? this.getLast().next = new Node(data) : this.head = new Node(data)
  }

  getAt(n) {
    if (!this.head) return null
    let counter = 0
    let node = this.head
    while (counter < n) {
      if (!node.next) return null
      node = node.next
      counter++
    }
    return node
  }

  removeAt(n) {
    if (!this.getAt(n - 1)) return this.head = this.head.next
    if (!this.getAt(n)) return null
    if (!this.getAt(n + 1)) return this.removeLast()

    this.getAt(n - 1).next = this.getAt(n).next
  }

  insertAt(data, n) {
    //insert at head
    if (n === 0) return this.insertFirst(data)
    //insert at the end if out of bounds
    if (n >= list.size()) return this.insertLast(data)
    //insert with no head
    if (!this.head) return this.head = new Node(data)
    
    const previous = this.getAt(n - 1)
    const newNode = new Node(data, previous.next)
    previous.next = newNode
  }

  forEach(fn) {
    if (!this.head) return null
    let counter = 0
    let node = this.head
    while (counter < this.size()) {
      if (!node.next) return
      fn(node, counter)
      node = node.next
      counter++
    }
    return node
  }

  *[Symbol.iterator]() {
    let node = this.head
    while (node) {
      yield node
      node = node.next
    }
  }
}

const list = new LinkedList()
list.insertLast(1)
list.insertLast(2)
list.insertLast(3)
list.insertLast(4)
list.insertLast(5)

for (const node of list) {
  node.data += 10
}

module.exports = { Node, LinkedList, list }