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
  let arr = [], q = [root]
  while (q.length) {
    let n = q.shift()
    arr.push(n ? n.val : 'null')
    if (n) {
      q.push(n.left)
      q.push(n.right)
    }
  }
  return `[${arr.join(',')}]`

};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  let str = data.substr(1, data.length - 2)
  if (!str.length) return null
  let arr = str
    .split(',')
    .map(x => x == 'null' ? null : parseInt(x))
  let rootVal = arr.shift()
  if (rootVal === null) return null
  let root = new TreeNode(rootVal), q = [root]
  while (arr.length && arr.length) {
    let l = arr.shift(), r = arr.shift()
    let parent = q.shift()
    if (l !== null) {
      parent.left = new TreeNode(l)
      q.push(parent.left)
    }
    if (r !== null) {
      parent.right = new TreeNode(r)
      q.push(parent.right)
    }
  }
  return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */


// function TreeNode(val, left = null, right = null) {
//   this.val = val;
//   this.left = left
//   this.right = right;
// }

// // let root1 = new TreeNode(
// //   1,
// //   new TreeNode(
// //     2
// //   ),
// //   new TreeNode(
// //     3
// //   )
// // )

// let root1 = null

// console.log(deserialize('[]'))

// let serialized = serialize(root1)
// console.log(serialized)
// let deserialized = deserialize(serialized)
// console.log(JSON.stringify(deserialized))
