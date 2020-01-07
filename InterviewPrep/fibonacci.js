//fibonacci
// function fibonacci(n) {
//   const arr = [0, 1]
//   for (let i = 2; arr[arr.length - 1] <= n; i++) {
//     arr.push(arr[i - 2] + arr[i - 1])
//   }
//   console.log(arr[n])
// }

//recursive solution
// function fib(n, arr = [0, 1], i = 2) {
//   if (arr[arr.length - 1] >= n) {
//     console.log(arr[n])
//     return arr[n]
//   }
//   arr.push(arr[i - 2] + arr[i - 1])

//   fib(n, arr, i + 1)
// }

//recursive solution 2
// function fib(n) {
//   if (n < 2) return n

//   return fib(n - 1) + fib(n - 2)
// }

//memoization solution
function memoize(fn) {
  const cache = {}
  return function(...args) {
    if (cache[args]) return cache[args]
   
    const result = fn.apply(this, args)
    cache[args] = result
    return result
  }
}

function fib(n) {
  if (n < 2) return n

  return fib(n - 1) + fib(n - 2)
}

fib = memoize(fib)

console.log(fib(4))