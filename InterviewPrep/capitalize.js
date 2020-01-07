//capitalize
//solution 1
// function capitalize(str) {
//   const arr = str.split(' ')
//   const capitalized = []
//   for (let ele of arr) {
//     capitalized.push(ele = ele[0].toUpperCase() + ele.slice(1))
//   }
//   return capitalized.join(' ')
// }

//solution 2
function capitalize(str) {
  let result = str[0].toUpperCase()
  for (let i = 1; i < str.length; i++) {
    str[i - 1] === ' ' ? result += str[i].toUpperCase() : result += str[i]
  }
  return result
}

console.log(capitalize('A short sentence'))