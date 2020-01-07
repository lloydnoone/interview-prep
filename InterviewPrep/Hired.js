const solution = (arr) => {
  // Type your solution here 
  let str = ''
  let evenTotal = 0
  let oddTotal = 0
  
  if (arr.length === 0) str = ''

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== -1) {
      if (i % 2 === 0) {
        console.log('should be left side: ', arr[i])
        evenTotal += arr[i]
      } else {
        console.log('should be right side: ', arr[i])
        oddTotal += arr[i]
      }
    }
  }
  (evenTotal > oddTotal) ? str = 'Right' : str = 'Left'
  if (evenTotal === oddTotal) str = ''
  
  return str
}

solution([3,6,2,9,-1,10])
