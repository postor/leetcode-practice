/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function (nums) {
  let len = nums.length, grapFward = {}, grapBackward = {}
  nums.forEach((x, i) => {
    if (x > 0) {
      let i1 = (i + x) % len
      if (i1 != i) {
        if (!grapFward[i]) grapFward[i] = []
        grapFward[i].push(i1)
      }
      return
    }
    if (x < 0) {
      let i1 = i + x
      while (i1 < 0) i1 += len
      if (i1 != i) {
        if (!grapBackward[i]) grapBackward[i] = []
        grapBackward[i].push(i1)
      }
      return
    }
  })
  return findLoop(grapFward) || findLoop(grapBackward)

  function findLoop(graph) {
    while (true) {
      let removed = false
      let keys = Object.keys(graph)
      if (!keys.length) return false
      keys.forEach(k => {
        let arr = graph[k].filter(x => {
          if (!graph[x]) {
            removed = true
            return false
          }
          return true
        })
        if (!arr.length) {
          delete graph[k]
          return
        }
        graph[k] = arr
      })
      if (!removed) return true
    }
  }
};

// console.log(circularArrayLoop([-1, -1, -1]))
// console.log(circularArrayLoop([2,-1,1,2,2]))
// console.log(circularArrayLoop([-2,1,-1,-2,-2]))
