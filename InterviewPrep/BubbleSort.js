// bubble sort
function bubbleSort(arr) {
  //implement bubble sort
  for (let i = 0; i < arr.length; i++) { // loop through array
    for (let j = 0; j < (arr.length - i - 1); j++) {  // loop through a smaller bubble of the array each time
      // for each element check the element to the right if current is larger, swap them
      if (arr[j] > arr[j + 1]) {
        const swap = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = swap
      }
    }
  }
  // return sorted array
  return arr
}

console.log(bubbleSort([10, -30, 97, 0, 5]))