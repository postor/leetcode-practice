/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var nthMagicalNumber = function (n, a, b) {
  let modby = BigInt(Math.pow(10, 9) + 7), bigA = BigInt(a), bigB = BigInt(b), bigN = BigInt(n)
  if (a === b) return (bigN * bigA) % modby

  let minCommon = BigInt(findMinCommon(a, b))

  let probly = binsearch(BigInt(0), bigN * (bigA > bigB ? bigB : bigA) + BigInt(1))

  let aN = probly - probly % bigA, bN = probly - probly % bigB
  let rtn = aN > bN ? aN : bN
  return rtn % modby

  function binsearch(l, r) {
    let mid = (l + r) / BigInt(2)
    let cnt = count(mid)
    if (cnt > bigN) {
      return binsearch(l, mid)
    } else if (cnt < bigN) {
      return binsearch(mid, r)
    } else {
      // (cnt === bigN) 
      return mid
    }
  }

  function count(x) {
    return x / bigA + x / bigB - x / minCommon
  }

  function findMinCommon(a, b) {
    let rtn = a * b, by = 2
    while (by <= rtn / 2) {
      if (rtn % by === 0) {
        let t = rtn / by
        if (t % a === 0 && t % b === 0) {
          rtn = t
          continue
        }
      }
      by++
    }
    return rtn
  }
};

console.log(nthMagicalNumber(1, 2, 3))

console.log(nthMagicalNumber(4, 2, 3))

console.log(nthMagicalNumber(1000000000, 39999, 40000))

console.log(nthMagicalNumber(148097613, 27322, 15515))