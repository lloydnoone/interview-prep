//maxChar
//solution 1
// function maxChar(str) {
//   let highest = 0
//   let key = ''
//   const charMap = {}
//   for (const char of str) {
//     if (charMap[char] === undefined) {
//       charMap[char] = 1
//     } else {
//       charMap[char] = charMap[char] + 1
//     }
//   }

//   //find highest occurrence
//   for (const char in charMap) {
//     if (charMap[char] >= highest) {
//       highest = charMap[char]
//       key = char
//     }
//   }
//   console.log('highest: ', key)
// }

//solution 2
function maxChar(str) {
  const chars = {}
  let highest = 0
  let key = ''
  for (const char of str) {
    chars[char] = chars[char] + 1 || 1
  }

  for (const char in chars) {
    if (chars[char] >= highest) {
      highest = chars[char]
      key = char
    }
  }
  return key
}

console.log(maxChar('Hello There!'))