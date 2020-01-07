function mergeSort(arr) {
  if (arr.length === 1) return arr

  const centre = Math.floor(arr.length / 2)
  const left = arr.slice(0, centre)
  const right = arr.slice(centre)

  
  
    
  merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  const results = [] //empty array to store elements in
  while (left.length && right.length) { // while there are still elements in both arrays
    if (left[0] < right[0]) { // if the first element in left is more than the one in right
      results.push(left.shift())
    } else {
      results.push(right.shift())
    }
  } 
  if (left.length > 0) results.push(...left)
  if (right.length > 0) results.push(...right)

  return results
}

console.log(merge([-30, 22], [0, 97]))

console.log(mergeSort([10, -30, 97, 0, 5]))