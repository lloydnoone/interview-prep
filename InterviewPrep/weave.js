const Queue = require('./queue')
//weave
const queueOne = new Queue()
queueOne.add(1)
queueOne.add(2)
const queueTwo = new Queue()
queueTwo.add('Hi')
queueTwo.add('There')
queueTwo.add('You')

function weave(sourceOne, sourceTwo) {
  const q = new Queue()
  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) q.add(sourceOne.remove())
    if (sourceTwo.peek()) q.add(sourceTwo.remove())
  }

  console.log(q)
}

weave(queueOne, queueTwo)
