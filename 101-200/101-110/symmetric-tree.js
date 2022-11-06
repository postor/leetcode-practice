/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true
  return isSym(root.left, root.right)

  function isSym(p, q) {
    let a = ge(p), b = ge(q, true)
    while (true) {
      let v1 = a.next(), v2 = b.next()
      if (v1.done != v2.done) {
        return false
      }
      if (v1.done) {
        return true
      }
      if (v1.value !== v2.value) {
        return false
      }
    }
  }

  function* ge(n, right) {
    if (n) {
      yield n.val
      if (right) {
        yield* ge(n.right, right)
        yield* ge(n.left, right)
      } else {
        yield* ge(n.left)
        yield* ge(n.right)
      }
    } else {
      yield null
    }
  }
};

let rtn = isSymmetric({
  val: 2,
  left: {
    val: 3,
    left: {
      val: 4,
    },
    right: {
      val: 5,
      left: {
        val: 8,
      },
      right: {
        val: 9,
      },
    }
  },
  right: {
    val: 3,
    right: {
      val: 4,
    },
    left: {
      val: 5,
      right: {
        val: 8,
      },
      left: {
        val: 9,
      },
    }
  }
})