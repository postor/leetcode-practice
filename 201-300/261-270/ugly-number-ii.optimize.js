/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  const MAX = 1690
  let q = [1]
  const factors = [2, 3, 5]

  let it = gen()
  for (let i = 0; i < n - 1; i++) it.next()
  return it.next().value

  function* gen() {
    let counter = 0
    while (counter < MAX) {
      let x = q.shift()
      yield x
      counter++
      q = merge(q, factors.map(y => x * y))
    }
  }

  function merge(arr1 = [], arr2 = []) {
    let i = 0, j = 0, rtn = []
    while (true) {
      if (arr1.length == i) return rtn.concat(arr2.slice(j))
      if (arr2.length == j) return rtn.concat(arr1.slice(i))
      if (arr1[i] == arr2[j]) {
        rtn.push(arr1[i])
        i++ , j++
      } else if (arr1[i] < arr2[j]) {
        rtn.push(arr1[i])
        i++
      } else {
        rtn.push(arr2[j])
        j++
      }
    }
  }
};

// console.time()
// console.log(nthUglyNumber(95))
// console.timeEnd()