//steps
//solution 1
// function steps(num) {
//   let hashCounter = 0
//   for (let i = 0; i < num + 1; i++) {
//     //print a step
//     let step = ''
//     //print the hashs
//     for (let j = 0; j < hashCounter; j++) {
//       step += '#'
//     }
//     for (let k = 0; k < num - hashCounter; k++) {
//       step += ' '
//     }
//     hashCounter++
//     console.log(step)
//   }
// }

//solution 2
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = ''
//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#'
//       } else {
//         stair += ' '
//       }
//     }
//     console.log(stair)
//   }
// }

//solution 3
function steps(n, row = 0, stair = '') {
  if (n === row) {
    return
  }

  if (n === stair.length) {
    console.log(stair)
    return steps(n , row + 1)
  }

  if (stair.length <= row) {
    stair += '#'
  } else {
    stair += ' '
  }
  steps(n, row, stair)
}

steps(3)