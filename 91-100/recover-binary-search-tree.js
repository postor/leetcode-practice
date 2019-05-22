/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  rs()
  return root
  function rs(node = root) {
    let arr = []
    r()
    function r(n = node) {
      if (n) {
        if (arr.some(x => swap(x, n))) return true
        arr.push(n)
        return r(n.left) || r(n.right)
      }
    }
  }

  function valid(node = root) {
    let rtn = []
    if (node.left) {
      let l = valid(node.left)
      if (!l) return false
      if (l[1] >= node.val) return false
      //记录最小值
      rtn.push(l[0])
    } else {
      rtn.push(node.val)
    }
    if (!node.right) {
      rtn.push(node.val)
      return rtn
    }
    let r = valid(node.right)
    if (!r) return false
    if (r[0] <= node.val) return false
    //记录最大值
    rtn.push(r[1])
    return rtn
  }

  function swap(n1, n2) {
    //swap
    let t = n1.val
    n1.val = n2.val
    n2.val = t
    //check
    if (valid(root, false)) return true

    //swapback
    n2.val = n1.val
    n1.val = t
    return false
  }
};

let result = recoverTree({
  val: 1,
  left: {
    val: 3,
    right: {
      val: 2
    }
  }
})
print(result)

function print(n) {
  let rtn = []
  r()
  console.log(rtn)
  function r(n) {
    if (!n) return
    r(n.left)
    rtn.push(n.val)
    r(n.right)
  }
}