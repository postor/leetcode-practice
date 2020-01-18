const vals = [1, 2, 4, 8, 16, 32], { hour, minute } = getDP()

/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function (num) {
  let possible = []
  for (let i = Math.max(0, num - 6); i < 5; i++) {
    join(hour[i], minute[num - i])
  }

  function join(hours = [], minutes = []) {
    hours.forEach(h => {
      minutes.forEach(m => {
        possible.push(`${h}:${('' + m).padStart(2, '0')}`)
      })
    })
  }
  return possible
};

function getDP() {
  // dp[start][left] = sums of left values from vals.slice(start)
  //      left    0    1           2    3    4    5    6
  // start
  //     0        0    1-32
  //     1        0    2-32
  //     2        0    4-32        
  //     3        0    8,16,32     24,40,48   
  //     4        0    16,32       48
  //     5        0    32          []
  //     6        0    []

  let dp = new Array(7).fill(0).map(x => new Array(7).fill(0))
  for (let start = 0; start < dp.length; start++) {
    dp[start][0] = [0]
    dp[start][7 - start] = []
  }

  for (let start = 5; start >= 0; start--) {
    for (let left = 1; left <= 6 - start; left++) {
      dp[start][left] = dp[start + 1][left - 1]
        .map(x => x + vals[start])
        .concat(dp[start + 1][left])
    }
  }

  let dpHour = [], dpMinute = []
  for (let i = 0; i <= 4; i++) {
    dpHour[i] = dp[0][i].filter(x => x < 12)
  }
  for (let i = 0; i <= 6; i++) {
    dpMinute[i] = dp[0][i].filter(x => x < 60)
  }
  return {
    hour: dpHour,
    minute: dpMinute,
  }
}

// console.log(readBinaryWatch(1))
