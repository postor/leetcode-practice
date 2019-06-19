/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {
  let it = gen()
  for (let i = 0; i < n - 1; i++) {
    it.next()
    // console.log(i + '|' + it.next().value)
  }
  return it.next().value

  function* gen() {
    let arr = [1]
    while (true) {
      let x = arr.shift()
      merge(arr, primes.map(y => y * x))
      yield x
    }

    function merge(p = [], q = []) {
      let lastStart = 0
      q.forEach(x => {
        let i = findHalfIndex(x, lastStart, p.length - 1)
        if (p[i] == x) return
        p.splice(i, 0, x)
        lastStart = i + 1
      })

      function findHalfIndex(x, start, end) {
        if (x <= p[start]) {
          return start
        }
        if (x > p[end]) return end + 1
        if (end - start <= 1) return x <= p[end] ? end : end + 1
        let mid = Math.floor((start + end) / 2)
        if (x <= p[mid]) return findHalfIndex(x, start, mid)
        return findHalfIndex(x, mid, end)
      }
    }
  }
};

// console.log(nthSuperUglyNumber(12, [2, 7, 13, 19]))