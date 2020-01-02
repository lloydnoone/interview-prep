//matrix
function matrix(n) {
  const results = []
  let startColumn = 0
  let startRow = 0
  let endColumn = n - 1
  let endRow = n - 1
  //create array of empty array
  for (let i = 0; i < n; i++) {
    results.push([])
  }
  //create a counter variable starting at 1
  let counter = 1
  //add all elements
  while (startColumn <= endColumn && startRow <= endRow) {
    //loop from start column to end column
    for (let j = startColumn; j <= endColumn; j++) {
      //assign counter variable to each element
      results[startRow][j] = counter
      counter++
    }
    //increment start row
    startRow++
    //loop from start row to end row
    for (let k = startRow; k <= endRow; k++) {
      results[k][endColumn] = counter
      counter++
    }
    //decrement endColumn
    endColumn--
    //loop from endColumn to startColumn
    for (let l = endColumn; l >= startColumn; l--) {
      results[endRow][l] = counter
      counter++
    }
    endRow--
    //loop end row to start row
    for (let m = endRow; m >= startRow; m--) {
      results[m][startColumn] = counter
      counter++
    }
    startColumn++
    console.log(results)
  }
}

matrix(3)