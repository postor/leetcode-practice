
// Complete the getPrimes function below.
function getPrimes(n) {
  return gen(n)
  function* gen(n) {
    for (let i = 2; i < n; i++) {
      if (isPrime(i)) yield i
    }
  }

  function isPrime(x) {
    for (let i = 2; i <= x / 2; i++) {
      if (x % i === 0) return false
    }
    return true
  }

}

console.log([...getPrimes(10)])