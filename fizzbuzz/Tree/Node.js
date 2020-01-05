class Node {
  constructor(data) {
    this.data = data
    this.children = []
  }

  add(data) {
    this.children.push(new Node(data))
  }

  remove(data) {
    this.children = this.children.filter(ele => {
      return ele.data !== data
    })
  }
}

const n = new Node(10)
n.add(20)
n.add(30)
n.add(40)

n.remove(30)

module.exports = Node