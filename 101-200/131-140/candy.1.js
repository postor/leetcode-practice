/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let total = 0;
  let stack = 1; // the stack record rating sequence from high to low, we just need the length here
  let minCost = 1; // bottom of the stack cost
  for (let i = 1, len = ratings.length; i < len; i++) {
    if (ratings[i] < ratings[i - 1]) {
      stack++; // push stack
    } else {
      // top of the stack only need 1, but bottom of the stack need Math.max(min, stack)
      total += stack * (stack - 1) / 2 + Math.max(minCost, stack);
      if (ratings[i] === ratings[i - 1]) {
        minCost = 1; // clear cost
      } else if (stack > 1) {
        minCost = 2; // clear cost, but must higher than 1
      } else {
        minCost++; // raise cost
      }
      stack = 1; // clear stack
    }
  }
  total += stack * (stack - 1) / 2 + Math.max(minCost, stack);
  return total;
};

// console.log(candy([1, 0, 2]))