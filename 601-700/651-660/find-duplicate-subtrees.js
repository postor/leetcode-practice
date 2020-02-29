/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  let heightNodes = [], rtn = [], cache = new Map, used = new Map
  r(root)
  return rtn

  function r(n) {
    if (!n) return 0
    let height = Math.max(r(n.left), r(n.right)) + 1
    if (heightNodes[height] === undefined) heightNodes[height] = []
    let found = heightNodes[height].some(x => {
      if (isSame(n, x)) {
        if (!used.has(x)) {
          used.set(x, true)
          rtn.push(x)
        }
        return true
      }
      return false
    })
    if (!found) heightNodes[height].push(n)
  }

  function isSame(n1, n2) {
    let cached = getCache(n1, n2)
    if (cached !== undefined) return cached
    if (!n1) return cacheValue(!n2)
    if (!n2) return cacheValue(false)
    if (n1.val !== n2.val) return cacheValue(false)
    return cacheValue(isSame(n1.left, n2.left) && isSame(n1.right, n2.right))

    function cacheValue(v) {
      setCache(n1, n2, v)
      return v
    }
  }


  function getCache(n1, n2) {
    if (!cache.has(n1)) return
    let c = cache.get(n1)
    if (!c.has(n2)) return
    return c.get(n2)
  }

  function setCache(n1, n2, same) {
    if (!cache.has(n1)) {
      let c = new Map()
      c.set(n2, same)
      cache.set(n1, c)
      return
    }
    let c = cache.get(n1)
    c.set(n2, same)
  }
};