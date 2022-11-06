/**
 * @param {number[]} nums
 * @return {boolean}
 */
var judgePoint24 = function (nums) {
  let ops = [
    (a, b) => [a + b],
    (a, b) => [a * b],
    (a, b) => [a - b, b - a],
    (a, b) => {
      if (a === 0 && b === 0) return []
      if (a === 0 || b === 0) return [0]
      return [a / b, b / a]
    }]

  return mode1() || mode2()


  // ((a,b),(c,d))
  function mode1() {
    let dic = [[], [2, 3], [1, 3], [1, 2]]
    for (let i = 1; i < nums.length; i++) {
      let [c, d] = dic[i]
      let ab = anyOpt(nums[0], nums[i]), cd = anyOpt(nums[c], nums[d])
      for (let x of ab) {
        for (let y of cd) {
          if (has(anyOpt(x, y), 24)) {
            return true
          }
        }
      }
    }
    return false
  }
  // (((a,b),c),d)
  function mode2() {
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        let all = new Set([0, 1, 2, 3])
        all.delete(i)
        all.delete(j)
        let [o, p] = all
        let vals = anyOpt(nums[i], nums[j])
        if (tryXY(vals, nums[o], nums[p])) return true
        if (tryXY(vals, nums[p], nums[o])) return true
      }
    }
    return false

    function tryXY(vals, x, y) {
      for (let val of vals) {
        for (let val1 of anyOpt(val, x)) {
          if (has(anyOpt(val1, y), 24)) {
            return true
          }
        }
      }
      return false
    }
  }

  function anyOpt(a, b) {
    let set = new Set
    ops.forEach(x => x(a, b).forEach(y => set.add(y)))
    return set
  }

  function has(set, val) {
    let df = 0.00000001
    for (let x of set) {
      if (Math.abs(val - x) < df) return true
    }
    return false
  }

};

// console.log(judgePoint24([3, 3, 8, 8]), true)
// console.log(judgePoint24([1, 3, 4, 6]), true)
// console.log(judgePoint24([4, 1, 8, 7]), true)
// console.log(judgePoint24([1, 2, 1, 2]), false)
// console.log(judgePoint24([1, 5, 9, 1]), false)