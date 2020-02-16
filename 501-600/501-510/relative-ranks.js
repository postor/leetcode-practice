/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function (nums) {
  let ranks = nums.map((x, i) => [i, x])
  top3 = ["Gold Medal", "Silver Medal", "Bronze Medal"]

  // sort with score
  ranks.sort(([i, x], [j, y]) => y - x)

  // assign ranks
  for (let i = 0; i < nums.length; i++) {
    ranks[i][1] = i < top3.length ? top3[i] : (i + 1) + ''
  }

  // sort with index
  ranks.sort(([i, x], [j, y]) => i - j)
  return ranks.map(([i, str]) => str)
};

// console.log(findRelativeRanks([5, 4, 3, 2, 1]))
// console.log(findRelativeRanks([10, 3, 8, 9, 4]))
