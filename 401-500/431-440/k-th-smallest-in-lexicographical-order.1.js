/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (n, k) {
  let result, left = k
  countPrifix()
  return result
  function countPrifix() {
    if (result) return
    for (let i = 1; i < 10; i++) {
      if (i > n) return
      {
        let t = i, count = 1
        while (t <= n) {
          if (checkFindOnly(t, count)) return
          t *= 10, count *= 10
        }
      }
      {
        let t = i * 10, count = 10, stack = []
        while (t <= n) {
          stack.push([t, count])
          t *= 10, count *= 10
        }
        while (stack.length) {
          let [t, count] = stack.pop()
          if (checkFind(t, count)) {
            if (result) return
            break
          }
        }
      }
    }
  }

  function checkFindOnly(prifix) {
    if (left == 1) {
      result = prifix
      return true
    }
    left -= 1
  }

  function checkFind(prifix, count) {
    let l = left - count + 1
    if (l > 0) {
      left = l
      return true
    }
    let n1 = prifix + count > n ? n - prifix : count - 1
    let v = findKthNumber2(n1, left)
    if (!v) return

    result = prifix + v
    return true
  }

  function findKthNumber2(n, k) {
    if (n < k) return
    let left = k, t = 1
    while (t * 10 <= left) {
      t *= 10
    }
    let i = 1
    for (; i < 10; i++) {
      if (i * t > left) break
    }
    t = t * (i - 1)
    left -= t
    if (left == 0) return t
    return t + findKthNumber2(t - 1, left)
  }
};


// console.log(findKthNumber(10000, 10000))

new Array(10000).fill(0).forEach((x, i) => {
  console.log((i + 1) + "=" + findKthNumber(10000, i + 1))
})


// 1,10,100,11....9,90,99,100
// console.log(findKthNumber(10, 3))
// console.log(findKthNumber(13, 2))
// console.log(findKthNumber(5180541, 1762750))