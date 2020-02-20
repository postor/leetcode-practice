/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  // what we left after deleting is the longest common subsequence
  // so the return value shall be word1.length + word2.length - commonsub_length * 2
  // first we need to find commonsub_length using dp
  // dp[i][j] means word1.substr(0,i) and word1.substr(0,j) has dp[i][j] common subsequence chars
  let dp = new Array(word1.length + 1).fill(0).map(x => new Array(word2.length + 1).fill(0))
  // dp[i][0] and dp[0][j] shall all be 0, because empty string has no common with others
  // so we start at dp[1][1] and end at dp[word1.length][word2.length]
  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      // of course this has one more char than dp[i-1][j] and dp[i][j-1]
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      if (word1[i - 1] === word2[j - 1]) {
        // this means now got one more common subsequence than dp[i-1][j-1]
        dp[i][j] = Math.max(dp[i - 1][j - 1] + 1, dp[i][j])
      }
    }
  }
  // so the longest common subsequence length shall be dp[word1.length][word2.length]
  let = commonsub_length = dp[word1.length][word2.length]
  // so the result shall be 
  return word1.length + word2.length - commonsub_length * 2
};

// console.log(minDistance("a", "b"))
// console.log(minDistance("sea", "eat"))