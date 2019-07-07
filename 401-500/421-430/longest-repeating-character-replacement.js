/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  if(!s.length) return 0
  class W {
    constructor() {
      let c = s[0]
      this.meta = {
        [c]: 1
      }
      this.left = 0
      this.right = 0
      this.total = 1
    }

    add() {
      this.right++
      if (this.right >= s.length) return false
      let c = s[this.right]
      this.meta[c] = (this.meta[c] | 0) + 1
      this.total++
      return true
    }

    kick() {
      let c = s[this.left]
      this.left++
      this.meta[c]--
      this.total--
    }

    check() {
      let max = Object.keys(this.meta).reduce((last, x) => Math.max(last, this.meta[x]), 0)
      let other = this.total - max
      return k - other
    }
  }

  let w = new W(), max = 0
  while (true) {
    if (w.check() >= 0) {
      max = Math.max(max, w.total)
      if (!w.add()) break
      continue
    }
    w.kick()
  }
  return max
};

console.log(characterReplacement('ABAA', 0))
// console.log(characterReplacement('AABABBA', 1))