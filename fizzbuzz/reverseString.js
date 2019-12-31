// reverse string

//solution one
// function reverse(str) {
//   console.log(str.split('').reverse().join(''))
// }

//solution 2
// function reverse(str) {
//   let reversed = ''
//   for (let i = 0; i < str.length; i++) {
//     reversed = reversed + str[str.length - i - 1]
//     console.log(reversed)
//   }
//   console.log('reversed is: ', reversed)
// }


// solution 3
// function reverse(str) {
//   let reversed = ''
//   for (const char of str) {
//     reversed = char + reversed
//   }
//   console.log(reversed)
// }

//solution 4
function reverse(str) {
  console.log(str.split('').reduce((rev, char) => char + rev, ''))
}

reverse('hello')