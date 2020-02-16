/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
  let rtn = [], maxCount = 0, last = undefined, lastCount = 0
  if (!root) return rtn
  for (let val of lnr(root)) {
    if (last === val) {
      lastCount++
      continue
    }

    updateRtn(last, lastCount)
    last = val
    lastCount = 1
  }
  updateRtn(last, lastCount)
  return rtn

  function updateRtn(val, count) {
    if (count == maxCount) {
      rtn.push(val)
      return
    }
    if (count > maxCount) {
      rtn = [val]
      maxCount = count
    }
  }

  function* lnr(n) {
    if (n) {
      yield* lnr(n.left)
      yield n.val
      yield* lnr(n.right)
    }
  }

};

console.log(findMode({
  val: 6,
  left: {
    val: 2,
    left: {
      val: 0
    },
    right: {
      val: 4,
      left: {
        val: 2
      },
      right: {
        val: 6
      }
    }
  },
  right: {
    val: 8,
    left: {
      val: 7
    },
    right: {
      val: 9
    }
  }
}))

