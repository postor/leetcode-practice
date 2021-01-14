/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let stack = [], rtn = []
  outer:
  for (let n of asteroids) {
    // stack empty or last one moving left or same as last, just add to stack
    if (!stack.length || stack[stack.length - 1] < 0 || n > 0) {
      stack.push(n)
      continue
    }
    while (stack.length && stack[stack.length - 1] > 0) {
      let diff = (stack[stack.length - 1] + n)
      // n disappear
      if (diff > 0) {
        continue outer
      }
      // both disappear
      if (diff == 0) {
        stack.pop()
        continue outer
      }
      // last disappear
      stack.pop()
    }
    stack.push(n)
  }
  return stack
};