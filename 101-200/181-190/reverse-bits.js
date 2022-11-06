/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  const BITS = getBits()
  // console.log(BITS)
  let arr = toArray(n)
  // console.log(arr.map(x => x ? 1 : 0).join(''))
  const reversed = arr.reverse()
  // console.log(reversed.map(x => x ? 1 : 0).join(''))
  return fromArray(reversed)


  function toArray(n) {
    return BITS.map(x => x & n)
  }
  function fromArray(arr) {
    return BITS.reduce((result, next, i) => {
      return result + next * (arr[i] ? 1 : 0)
    }, 0)
  }
  function getBits() {
    let bits = [], cur = 1
    for (let i = 31; i >= 0; i--) {
      bits[i] = cur
      cur *= 2
    }
    return bits
  }
};

// console.log(reverseBits(43261596))