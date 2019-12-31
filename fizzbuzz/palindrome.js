//solution 1
// function palindrome(str) {
//   console.log(str === str.split('').reverse().join('') ? true : false)
// }

//solution 2
function palindrome(str) {
  console.log(str.split('').every((char, i) => {
    return char === str[str.length - i - 1]
  }))
}

palindrome('abbc')