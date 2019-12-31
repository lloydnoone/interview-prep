//reverse int
//solution 1
function reverseInt(int) {
  console.log(parseInt(int.toString().split('').reverse().join('')) * Math.sign(int))
}

//solution 2

reverseInt(-123)