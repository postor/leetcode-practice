/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  if (!nums.length) return 0
  // group 0s and 1s to group
  let groups = [new Group(nums[0])]

  for (let i = 1; i < nums.length; i++) {
    let curGroup = groups[groups.length - 1]
    if (curGroup.value == nums[i]) {
      curGroup.count++
      continue
    }
    groups.push(new Group(nums[i]))
  }
  let sums = groups.map(x => [0, 0])
  sums[0][groups[0].value] = groups[0].count
  for (let i = 1; i < groups.length; i++) {
    sums[i] = sums[i - 1].concat()
    sums[i][groups[i].value] += groups[i].count
  }

  let max = 0, traveld = {}, queue = [[0, groups.length - 1]]
  while (queue.length) {
    let [l, r] = queue.shift()
    tryMax(l, r)
  }
  return max


  function tryMax(leftIndex, rightIndex) {
    if (earlyStop()) return
    let stats = getStats(leftIndex, rightIndex)
    let outer = [0, 0]
    if (leftIndex > 0) {
      let { value, count } = groups[leftIndex - 1]
      outer[value] += count
    }
    if (rightIndex + 1 < groups.length) {
      let { value, count } = groups[rightIndex + 1]
      outer[value] += count
    }
    // try balance first
    let diff = stats[0] - stats[1]
    if (diff > 0) {
      // more zero than  1
      outer[1] -= diff
      if (outer[1] < 0) {
        pushQueue(leftIndex + 1, rightIndex)
        pushQueue(leftIndex, rightIndex - 1)
        return
      }
    } else {
      outer[0] += diff
      if (outer[0] < 0) {
        pushQueue(leftIndex + 1, rightIndex)
        pushQueue(leftIndex, rightIndex - 1)
        return
      }
    }
    let total = Math.max(stats[0], stats[1]) * 2
    total += Math.min(outer[0], outer[1]) * 2
    max = Math.max(total, max)

    /**
     * 
     */
    function earlyStop() {
      let l = leftIndex > 0 ? leftIndex - 1 : 0
      let r = rightIndex == groups.length - 1 ? groups.length - 1 : rightIndex + 1
      let stats = getStats(l, r)
      return stats.some(x => x * 2 < max)
    }

  }


  function pushQueue(leftIndex, rightIndex) {
    if (!traveld[leftIndex]) traveld[leftIndex] = {}
    if (traveld[leftIndex][rightIndex]) return
    traveld[leftIndex][rightIndex] = true
    queue.push([leftIndex, rightIndex])
  }

  function getStats(leftIndex, rightIndex) {
    let rtn = [0, 0]
    if (leftIndex == rightIndex) {
      let { value, count } = groups[rightIndex]
      rtn[[value]] = count
      return rtn
    } else if (leftIndex == 0) {
      return sums[rightIndex]
    }
    // else
    return rtn.map((x, i) => sums[rightIndex][i] - sums[leftIndex - 1][i])
  }

  function Group(v, c = 1) {
    this.value = v
    this.count = c
  }
};

// console.log(findMaxLength([0, 1, 0, 1]))
// console.log(findMaxLength([0, 1, 0]))
// console.log(findMaxLength([0, 1]))

console.log(findMaxLength(require('./contiguous-array.data')))