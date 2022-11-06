/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (!root) return ''
  let str = '' + root.val
  if (root.left) {
    str += 'l' + serialize(root.left)
  }
  if (root.right) {
    str += 'r' + serialize(root.right)
  }
  return str
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if(!data) return null
  let tokens = []
  data.split('l').forEach((x, i, a1) => {
    x.split('r').forEach((y, j, a2) => {
      tokens.push(parseInt(y))
      if (j != a2.length - 1) tokens.push('r')
    })
    if (i != a1.length - 1) tokens.push('l')
  })
  return r(tokens)

  function r(tokens = []) {
    if (!tokens.length) return null
    if (tokens.length == 1) return new TreeNode(tokens[0])
    let [val, lr] = tokens
    let node = new TreeNode(val)
    if (lr == 'l') {
      // 有左孩子
      for (let i = 2; i < tokens.length; i += 2) {
        if (val < tokens[i]) {
          node.left = r(tokens.slice(2, i - 1))
          node.right = r(tokens.slice(i))
          return node
        }
      }
      // 没有右孩子
      node.left = r(tokens.slice(2))
      return node
    }
    // 只有右孩子
    node.right = r(tokens.slice(2))
    return node
  }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// let tree = new TreeNode(2)
// tree.left = new TreeNode(1)
// tree.right = new TreeNode(3)

// let data = serialize(tree)
// console.log(data)
// let t1 = deserialize(data)
// console.log(t1)

let tree = new TreeNode(0)
let data = serialize(tree)
console.log(data)
let t1 = deserialize(data)
console.log(t1)
