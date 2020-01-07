const Node = require('./Node')

class Tree {
  constructor() {
    this.root = null
  }

  traverseBF(fn) {
    const arr = [this.root] //start with the root
    while (arr.length) { //while the array is not empty
      const node = arr.shift() //remove next node in the array to process it
      arr.push(...node.children) // the children from that node are queued up to process next
      fn(node) //process the node that was removed
    }
  }

  traverseDF(fn) {
    const arr = [this.root]
    while (arr.length) {
      const node = arr.shift()
      arr.unshift(...node.children)
      fn(node)
    }
  }
}

const tree = new Tree()
tree.root = new Node(10)
tree.root.add(20)
tree.root.add(30)
tree.root.add(40)
tree.traverseBF((node) => {
  node.data += 50
})
//console.log(tree)

module.exports = tree