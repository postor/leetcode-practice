/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantDirectedConnection = function (edges) {
  // collect meta data
  let childCounts = new Map(), tedges = edges
  for (let [a, b] of edges) {
    childCounts.set(a, childCounts.has(a) ? childCounts.get(a) + 1 : 1)
    childCounts.set(b, childCounts.has(b) ? childCounts.get(b) : 0)
  }

  // trim leafs
  outer:
  while (true) {
    for (let [node, childCount] of childCounts.entries()) {
      if (childCount === 0) {
        let [found, result] = trimLeaf(node, childCounts)
        if (found) {
          // found common parent while trim leaf node, then 
          return result
        }
        continue outer
      }
    }
    break
  }
  // meta root
  let parentCounts = new Map()
  for (let [a, b] of edges) {
    parentCounts.set(a, parentCounts.has(a) ? parentCounts.get(a) : 0)
    parentCounts.set(b, parentCounts.has(b) ? parentCounts.get(b) + 1 : 1)
  }
  // trim roots
  outer2:
  while (true) {
    for (let [node, parentCount] of parentCounts.entries()) {
      if (parentCount === 0) {
        let removedEdges = trimRoot(node, parentCounts)
        for (let [a, b] of removedEdges) {
          let [found, edge] = findCommonChildEdge(b)
          if (found) {
            // found another edge share the same child, then he must be in circle and is the one to remove
            return edge
          }
        }
        continue outer2
      }
    }
    break
  }

  // just break the circle
  return tedges[tedges.length - 1]


  /**
   * if we found two parents, then one is useless and return the last edge
   * @param {*} leaf  
   */
  function trimLeaf(leaf, dic) {
    let removedEdges = []
    for (let i = tedges.length - 1; i >= 0; i--) {
      let [a, b] = tedges[i]
      if (b !== leaf) continue
      dic.set(a, dic.get(a) - 1)
      removedEdges.push(tedges[i])
      tedges.splice(i, 1)
    }
    dic.delete(leaf)
    if (removedEdges.length > 1) return [true, removedEdges[0]]
    return [false]
  }

  /**
   * if we found two parents, then one is useless and return the last edge
   * @param {*} root  
   */
  function trimRoot(root, dic) {
    let removedEdges = []
    for (let i = tedges.length - 1; i >= 0; i--) {
      let [a, b] = tedges[i]
      if (a !== root) continue
      dic.set(b, dic.get(b) - 1)
      removedEdges.push(tedges[i])
      tedges.splice(i, 1)
    }
    dic.delete(root)
    return removedEdges
  }

  function findCommonChildEdge(child) {
    for (let i = tedges.length - 1; i >= 0; i--) {
      let [a, b] = tedges[i]
      if (b === child)
        return [true, tedges[i]]
    }
    return [false]
  }

};

// console.log(findRedundantDirectedConnection([[1, 2], [1, 3], [2, 3]]), [2, 3])
// console.log(findRedundantDirectedConnection([[1, 2], [2, 3], [3, 4], [4, 1], [1, 5]]), [4, 1])
// console.log(findRedundantDirectedConnection([[2, 1], [3, 1], [4, 2], [1, 4]]), [2, 1])
// console.log(findRedundantDirectedConnection([[4, 2], [1, 5], [5, 2], [4, 3], [4, 1]]), [5, 2])