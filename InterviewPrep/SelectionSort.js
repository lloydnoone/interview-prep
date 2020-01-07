function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) { //loop thorugh array
    let indexOfMin = i // assume the first element is the lowest at the start of each loop
    for (let j = i + 1; j < arr.length; j++) { // loop through the rest of the array after i
      if (arr[j] < arr[indexOfMin]) { // if element at j is less than the current index of min
        indexOfMin = j // record that as the index of min instead
      }
    }
    if (i !== indexOfMin) { // at the end of each main loop if the index of i is not the same as index of min 
      const swap = arr[indexOfMin] // swap them
      arr[indexOfMin] = arr[i]
      arr[i] = swap
    }
  }
  return arr // return the array
}

console.log(selectionSort([10, -30, 97, 0, 5]))