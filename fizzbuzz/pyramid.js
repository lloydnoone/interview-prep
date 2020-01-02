//pyramid
// function pyramid(n) {
//   const midpoint = Math.floor((n * 2 - 1) / 2)  
//   //iterate through rows
//   for (let row = 0; row < n; row++) {
//     //create an empty level string
//     let level = ''
//     //iterate through columns
//     for (let column = 0; column < n * 2 - 1; column++) {
//       //column should have a hash if...
//       if (midpoint - row <= column && midpoint + row >= column) { //|| midpoint + row || midpoint - row) {
//         level += '#'
//       } else {
//         level += ' '
//       }
//     }
//     console.log(level)
//   }
// }



//recursive solution
function pyramid(n, row = 0, level = '') {
  const midpoint = Math.floor((n * 2 - 1) / 2)
  if (n === row) {
    return
  }

  if (n * 2 - 1 === level.length) {
    console.log(level)
    return pyramid(n, row + 1)
  }

  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    level += '#'
  } else {
    level += ' '
  }
  pyramid(n, row, level)
}

console.log(pyramid(3))