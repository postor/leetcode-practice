/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  let sets = []
  for (let [a, b] of edges) {
    let relatedSet = new Set(), noneRelated = []
    for (let set of sets) {
      if (set.has(a) && set.has(b)) return [a, b]
      if (set.has(a) || set.has(b)) {
        relatedSet.add(a)
        relatedSet.add(b)
        for (let edge of set) {
          relatedSet.add(edge)
        }
        continue
      }
      noneRelated.push(set)
    }
    sets = noneRelated
    if (!relatedSet.size) {
      relatedSet.add(a)
      relatedSet.add(b)
    }
    sets.push(relatedSet)
  }
  throw 'no redudant'
};

// console.log(findRedundantConnection([[1, 2], [1, 3], [2, 3]]))

// console.log(findRedundantConnection([[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]))

// console.log(findRedundantConnection([[3, 4], [1, 2], [2, 4], [3, 5], [2, 5]]))