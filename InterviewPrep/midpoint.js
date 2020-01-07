const linkedList = require('./linkedList')
const list = linkedList.list

//midpoint
function midpoint(list) {
  let slow = list.head
  let fast = list.head
  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}

console.log(midpoint(list))
