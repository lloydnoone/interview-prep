//vowels
// function vowels(str) {
//   const vowels = 'aeiou'
//   let counter = 0

//   for (const char of str.toLowerCase()) {
//     if (vowels.includes(char)) counter++
//   }
//   console.log(counter)
// }

function vowels(str) {
  const vowels = str.toLowerCase().match(/[aeiou]/g)
  vowels ? console.log(vowels.length) : console.log(0)
}

vowels('striing')