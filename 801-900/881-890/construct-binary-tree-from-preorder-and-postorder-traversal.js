/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function (preorder, postorder) {
  let visited = new Set(), visitedPost = new Set
  let rtn = createNode()
  return rtn

  function createNode(parent = -1) {
    while (visited.has(postorder[0])){
      visitedPost.add(postorder.shift())
    }
    let node = new TreeNode()

    if (0 === preorder.length) {
      // preorder 已经空了
      if (0 === postorder.length) {
        return null
      }
      node.val = postorder.shift()
      visitedPost.add(node.val)
    } else if (preorder[0] === postorder[0]) {
      // 参考 CASE2
      if (visitedPost.has(parent)) {
        return null
      }

      // 如果相等，那就两边都去掉，返回这个数字的节点
      //    1
      //   / \
      //  2   3
      // pre=[2,3],post=[2,3,1] =>  pre=[3],post=[3,1]
      preorder.shift()
      node.val = postorder.shift()
      visitedPost.add(node.val)
    } else {
      // 参考 CASE2
      if (visitedPost.has(parent)) {
        return null
      }
      // 如果不相等，那就去掉preorder的第一个，返回这个数字的节点
      //    1
      //   / \
      //  2   3
      // pre=[1,2,3],post=[2,3,1] =>  pre=[2,3],post=[2,3,1]
      node.val = preorder.shift()

      visited.add(node.val)
      // 填充左孩子
      node.left = createNode(node.val)
      // 填充右孩子
      node.right = createNode(node.val)
    }
    return node
  }
};


/**
 *                   1
 *              2        3
 *            4   5    6   7
 * 
 *    stack             pre                     post
 *    1                 [2, 4, 5, 3, 6, 7]      [4, 5, 2, 6, 7, 3, 1]
 *    1.l=2             [4, 5, 3, 6, 7]         [4, 5, 2, 6, 7, 3, 1]
 *    2.l=4             [5, 3, 6, 7]            [5, 2, 6, 7, 3, 1]
 *    2.r=5             [3, 6, 7]               [2, 6, 7, 3, 1]
 *    1.r=null 逻辑中 2 已经走过 会返回 null         
 *   
 */
// console.log(constructFromPrePost([1, 2, 4, 5, 3, 6, 7], [4, 5, 2, 6, 7, 3, 1]).toString())

/**
 *                   3
 *                  / \
 *                 4   2
 *                / 
 *               1   
 *    stack             pre              post
 *    3                 [4,1,2]        [1,4,2,3]
 *    3.l=4             [1,2]          [1,4,2,3]
 *    4.l=1             [2]            [4,2,3]
 *    4.r=2 错误逻辑，如果还在后面需要返回空，
 *          错误逻辑，右侧的4是已经经过的，所以每轮循环排除经过提前到最前
 *          错误逻辑 CASE1      如果已经经过了，这个分支返回null 
 *          CASE2 新增 postorder 不可以 作为已经用过的 postorder 的下级
 */

console.log(constructFromPrePost([3, 4, 1, 2], [1, 4, 2, 3]).toString())
// console.log(constructFromPrePost([2, 1], [1, 2]).toString())
// console.log(constructFromPrePost([1, 2, 4, 5, 3, 6, 7], [4, 5, 2, 6, 7, 3, 1]).toString())


function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
  this.toString = function () {
    let { val, left, right } = this
    return JSON.stringify({ val, left, right })
  }
}