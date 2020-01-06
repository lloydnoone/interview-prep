//BST Node
class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }

  insert(data) {
    if (data > this.data) {
      if (!this.right) return this.right = new Node(data)
      this.right.insert(data)
    } else {
      if (!this.left) return this.left = new Node(data)
      this.left.insert(data)
    }
  }

  contains(data) {
    if (data > this.data) {
      if (!this.right) return null
      this.right.contains(data) 
    }
    if (data < this.data) {
      if (!this.left) return null
      this.left.contains(data)
    }
    if (data === this.data) return this
  }

  validate(node, min = null, max = null) {
    if (max !== null && node.data > max) { // if max has not been set then dont use it to check.
      return false //  if node data is more than max the BST must be inalid
    }

    if (min !== null && node.data < min) { // if min has not been set then dont check that either
      return false // if node data is less than min then BST must be invalid
    }

    if (node.left && !validate(node.left, min, node.data)) { // if there is something there and validate returns false
      return false
    }

    if (node.right && !validate(node.right, node.data, max)) {
      return false
    }
    return true
  }
}