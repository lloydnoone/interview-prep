const tree = require('./Tree')
//level width
function levelWidth(root) {
  const arr = [root, 's']
  const counters = [0]
  while (arr.length > 1) { //if theres only an 's' in there then we must be done
    const node = arr.shift() // take the first element
    if (node === 's') { // if that first element is an S
      arr.push(node) // add the S back to the end of the array 
      counters.push(0) // add a new element to counters to record this levels width
    } else {
      arr.push(...node.children) // push current noes children into the array
      counters[counters.length - 1]++ //increment the counter for this level
    }
  }
  return counters
}

console.log(levelWidth(tree.root))
