//anagrams
//solution 1
// function anagrams(strA, strB) {
//   const strOne = strA.replace(/[^\w]/g, '').toLowerCase()
//   const strTwo = strB.replace(/[^\w]/g, '').toLowerCase()

//   if (strOne.length !== strTwo.length) return false

//   const charMapA = {}
//   const charMapB = {}

//   for (const char of strOne) {
//     charMapA[char] ? charMapA[char]++ : charMapA[char] = 1 
//   }
//   for (const char of strTwo) {
//     charMapB[char] ? charMapB[char]++ : charMapB[char] = 1 
//   }

//   for (const char of strOne) {
//     if (charMapA[char] !== charMapB[char]) return false
//   }

//   return true
// }

//solution 2
// function anagrams(strA, strB) {
//   const charMapA = buildCharMap(strA)
//   const charMapB = buildCharMap(strB)

//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length) return false

//   for (const char in charMapA) if (charMapA[char] !== charMapB[char]) return false

//   return true
// }

// function buildCharMap(str) {
//   const charMap = {}
//   for (const char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] ? charMap[char]++ : charMap[char] = 1 
//   } 
//   return charMap
// }

// solution 3
function anagrams(strA, strB) {
  const strOne = strA.replace(/[^\w]/g, '').toLowerCase()
  const strTwo = strB.replace(/[^\w]/g, '').toLowerCase()

  if (strOne.split('').sort().join('') !== strTwo.split('').sort().join('')) return false
  return true 
}

console.log(anagrams('rail safety', 'fairy tales'))