// arraychunk
// solution 1 (wrong)
// function chunk(arr, size) {
//   const chunkedArr = []
//   const chunk = []
//   let counter = 0
//   let chunkCounter = 0
//   //for each chunk create a new array and add it to the chunkedArr
//   for (const ele of arr) {
//     if (counter === size) {
//       console.log('counter: ', counter)
//       console.log('ele: ', ele)
//       console.log('chunk: ', chunk)
//       chunk[counter] = ele
//       chunkedArr[chunkCounter] = chunk
//       console.log('chunkedArr: ', chunkedArr)
//       counter = 0
//       chunkCounter++
//     } else {
//       console.log('counter2: ', counter)
//       console.log('ele2: ', ele)
//       console.log('chunk2: ', chunk)
//       chunk[counter] = ele
//       counter++
//     }
//   }
//   return chunkedArr
// }

//solution 2
// function chunk(arr, size) {
//   const chunked = []
//   for (const ele of arr) {
//     const chunk = chunked[chunked.length - 1]
//     if (!chunk || chunk.length === size) {
//       chunked.push([ele])
//     } else {
//       chunk.push(ele)
//     }
//   }
//   return chunked
// }

//solution 3
function chunk(arr, size) {
  const chunked = []
  let index = 0

  while (index < arr.length) {
    chunked.push(arr.slice(index, index + size))
    index += size
  }

  return chunked
}

console.log(chunk([1,2,3,4], 2))