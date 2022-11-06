/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */
var mincostToHireWorkers = function (quality, wage, k) {
  // wage of 1 quality for each worker
  let oneQualityWage = wage.map((x, i) => x / quality[i])

  // order workders by 1 quality wage
  let indexes = wage.map((x, i) => i)
  indexes.sort((a, b) => oneQualityWage[a] - oneQualityWage[b])

  // dp[j]=k 
  // k = min sum quality
  // j = in first cheaper ${j+1} workers (indexes, ordered by 1 quality wage) 
  // for group of 0 wokers 
  let dp = quality.map(x => 0)

  for (let workers = 1; workers <= k; workers++) {
    // dp for group of ${workers}
    let tdp = quality.map(x => 0)
    // first ${workers} total quality
    tdp[workers - 1] = (dp[workers - 2] || 0) + quality[indexes[workers - 1]]

    for (let i = workers; i < quality.length; i++) {
      // tdp[i-1] means not using this worker, dp[i - 1] + quality[indexes[i]] means using this worker
      tdp[i] = Math.min(tdp[i - 1], dp[i - 1] + quality[indexes[i]])
    }
    dp = tdp
  }

  // the return value
  let rtn = Infinity
  for (let i = k - 1; i < dp.length; i++) {
    rtn = Math.min(rtn, dp[i] * oneQualityWage[indexes[i]])
  }
  return rtn
};

// console.log(mincostToHireWorkers([10, 20, 5], [70, 50, 30], 2)) // 105

// console.log(mincostToHireWorkers([3, 1, 10, 10, 1], [4, 8, 2, 2, 7], 3)) //30.66667
