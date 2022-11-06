/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  let it = gen(), root = nextNode(), stack = [root]
  if (!root) return root

  let n = nextNode()
  while (stack.length) {
    if (!n) break
    let index = stack.length - 1
    if (tryAddLeft(index, n)) {
      n = nextNode()
      continue
    }
    if (tryAddRight(index, n)) {
      n = nextNode()
      continue
    }
    stack.pop()
  }
  return root

  function tryAddLeft(parentIndex, node) {
    let parent = stack[parentIndex]
    if (parent.left) return false
    if (node.val > parent.val) return false
    parent.left = node
    stack.push(node)
    return true
  }

  function tryAddRight(parentIndex, node) {
    let grandParent = stack[parentIndex - 1]
    if (grandParent && grandParent.val < node.val) {
      return false
    }

    let parent = stack[parentIndex]
    parent.right = node
    stack.splice(parentIndex, 1)
    stack.push(node)
    return true
  }

  function nextNode() {
    let { value, done } = it.next()
    if (done) return null
    return new TreeNode(value)
  }

  function* gen() {
    for (let x of preorder) yield x
  }
};


// console.log(bstFromPreorder([8,5,1,7,10,12]))

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }