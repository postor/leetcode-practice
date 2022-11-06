class Pos {
  constructor(row, index) {
    this.row = row
    this.index = index
  }
}

class BSTNode {
  constructor(val, poses, parent = null, left = null, right = null) {
    this.val = val
    this.poses = poses
    this.left = left
    this.right = right
    this.parent = parent
  }
}

class BST {
  constructor(wall = []) {
    this.root = new BSTNode(wall[0][0], [new Pos(0, 0)])
    for (let i = 1; i < wall.length; i++) {
      this.addNode(wall[i][0], i, 0)
    }
  }

  addNode(val, row, index) {
    let pos = new Pos(row, index)
    let n = this.root
    while (n) {
      if (val > n.val) {
        if (!n.right) {
          n.right = new BSTNode(val, [pos], n)
          return
        }
        n = n.right
        continue
      }
      if (val < n.val) {
        if (!n.left) {
          n.left = new BSTNode(val, [pos], n)
          return
        }
        n = n.left
        continue
      }
      n.poses.push(pos)
      return
    }
  }

  popLeft() {
    let n = this.root
    while (n) {
      if (n.left) {
        n = n.left
        continue
      }
      if (n === this.root) {
        this.root = n.right
        return n
      }
      if (!n.right) {
        n.parent.left = null
        return n
      }
      n.parent.left = n.right
      n.right.parent = n.parent
      return n
    }
    debugger
  }
}


/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
  let bst = new BST(wall), maxSameEndCount = 0
  let totalLength = wall[0].reduce((a, b) => a + b)

  while (true) {
    // get the smallest line
    let { poses = [], val } = bst.popLeft()
    // break if reach right end
    if (val === totalLength) break
    if (!bst.root) return 0
    // more rows end this line, less cut needed
    if (poses.length > maxSameEndCount) {
      maxSameEndCount = poses.length
    }
    // next bricks
    for (let { row, index } of poses) {
      bst.addNode(val + wall[row][index + 1], row, index + 1)
    }
  }
  return wall.length - maxSameEndCount
};

// console.log(leastBricks([[1, 2, 2, 1],
// [3, 1, 2],
// [1, 3, 2],
// [2, 4],
// [3, 1, 2],
// [1, 3, 1, 1]]))

// console.log(leastBricks([[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]))