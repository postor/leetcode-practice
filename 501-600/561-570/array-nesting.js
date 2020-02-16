/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function (nums) {
  // think this as linked nodes, then at least one ring
  // so find the max ring
  let sets = [], curSetIndex = 0
  let grouped = nums.map(x => -1)
  for (let i = 0; i < grouped.length; i++) {
    if (grouped[i] === -1) createGroup(i)
  }
  return sets.reduce((rtn, b) => Math.max(rtn, b.size), 0)

  function createGroup(i) {
    sets[curSetIndex] = new Set()
    addToGroup(i, curSetIndex)
    curSetIndex++
  }

  function addToGroup(i, groupId) {
    let set = sets[groupId]
    if (set.has(i)) return
    set.add(i)
    grouped[i] = groupId
    addToGroup(nums[i], groupId)
  }

};

console.log(arrayNesting([5,4,0,3,1,6,2]))