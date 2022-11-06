/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let stack = [], max = 0
  heights.forEach((x, i) => {
    // 看是否构成下降的趋势
    while (true) {
      // 空的或向上的趋势直接加进去
      if (!stack.length) {
        break
      }
      let last = stack[stack.length - 1]
      if (last.x <= x) {
        break
      }
      // 向下的趋势则踢掉较高的，直到趋势变得向上
      tryMax(i)
    }
    stack.push({
      x,
      i,
    })
  })

  while (stack.length) {
    tryMax(heights.length)
  }
  return max

  function tryMax(i) {
    let last = stack.pop() // 从stack中移除 last
    //let w = stack.length ? i - last.i : i
    let w = stack.length ? i - stack[stack.length - 1].i - 1 : i
    let area = last.x * w
    if (area > max) {
      max = area
    }
  }
};

console.log(largestRectangleArea([1, 1, 1]))
console.log(largestRectangleArea([2, 1, 2]))
console.log(largestRectangleArea([4, 2, 0, 3, 2, 5]))


/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea2 = function (heights) {
  if (!heights.length) return 0
  if (heights.every(v => v === heights[0])) {
    return heights[0] * heights.length
  }

  let dpMinTable = heights.map(x => []), max = 0
  for (let i = 0; i < heights.length; i++) {
    dpMinTable[0][i] = heights[i]
    if (heights[i] > max) max = heights[i]
  }
  for (let i = 1; i < heights.length; i++) {
    for (let j = 0; j < heights.length; j++) {
      //dpMinTable[j][j] = heights[j]
      if (j + i < heights.length) {
        dpMinTable[i][j] = Math.min(dpMinTable[i - 1][j], dpMinTable[i - 1][j + 1])
        tryMax(dpMinTable[i][j], i + 1)
      }
    }
    dpMinTable[i - 1] = []
  }
  //console.log(dpMinTable.join('\n'))
  return max

  function tryMax(min, span) {
    let area = min * span
    if (area > max) {
      max = area
    }
  }
};


/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea1 = function (heights) {
  let cache = {}, max = 0
  for (let i = 0; i < heights.length; i++) {
    for (let j = i; j < heights.length; j++) {
      let a = r(i, j)
      max = Math.max(a, max)
    }
  }
  return max
  function minHeight(left, right) {
    const key = `${left}_${right}`

    if (cache[key] !== undefined) return cache[key]

    if (left == right) {
      cache[key] = heights[left]
      return heights[left]
    }

    let h = Math.min(heights[left], minHeight(left + 1, right))
    cache[key] = h
    return h
  }

  function r(left = 0, right = heights.length - 1) {
    return (right - left + 1) * minHeight(left, right)
  }
};