const TreeNode = require('./TreeNode')

module.exports = (arr = []) => {
  if (!arr.length) return null
  let queue = [], root = nextNode()
  while (queue.length) {
    let n = queue.shift()
    n.left = nextNode()
    n.right = nextNode()
  }
  return root

  function nextNode() {
    if (!arr.length) return null
    let v = arr.shift()
    if (v === null) return null
    let n = new TreeNode(v)
    queue.push(n)
    return n
  }
}

