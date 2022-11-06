/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  // 动态规划结果缓存表
  let cache = Array(word1.length + 1).fill(0)
    .map(() => Array(word2.length + 1).fill(0))
  for (let i = 0; i <= word1.length; i++) {
    cache[i][0] = i
  }
  for (let i = 0; i <= word2.length; i++) {
    cache[0][i] = i
  }
  // 动态规划推理说明，假设参数为 "horse", "ros" 
  //                      ""     r       ro       ros     目标
  // [0, 1, 2, 3]         0      1
  // [1, 0, 0, 0]  h      1      替换=1（替换=左上+1，h到r需替换1次）
  // [2, 0, 0, 0]  ho                    相等=1（相等=左上，ho到ro和h到r的操作步骤相等）
  // [3, 0, 0, 0]  hor                   删除=2（删除=上+1，hor到ros =  ho到ro + 1）
  // [4, 0, 0, 0]  hors                           相等=2（相等=左上）
  // [5, 0, 0, 0]  horse                          删除=3（删除=上+1）
  //               当前

  //额外举个插入的例子
  //                      a        ac      act
  // 0, 1, 2        0     1        2
  // 1, 0, 0  a     1     相等=0   添加=1（左+1，a到ac = a到a + 1）
  // 2, 0, 0  at    2                      相等=1（左上）

  // 总结规律 相等=左上 增加=左+1 删除=上+1

  // 如果其中一个字符为空（前0字符），则变为相同最小步骤为另一字符长度
  // 接下来从1,1开始把其他的算出来
  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      // word1的前i字符转换为word2的前j字符
      if (word1[i - 1] == word2[j - 1]) {
        // 如果末尾两个字符相等则等价于左上格子的值
        cache[i][j] = cache[i - 1][j - 1]
        continue
      }
      // 如果末尾两个字符不相等，则需要使用增删替来改变这个字符
      cache[i][j] = Math.min(
        1 + cache[i][j - 1],  // 插入取左加1
        1 + cache[i - 1][j],  // 删除取上加1
        1 + cache[i - 1][j - 1] // 取左上加1
      )
    }
  }
  // console.table(cache)
  return cache[word1.length][word2.length]
};

console.log(minDistance('kitten', 'sitting'))

// console.log(minDistance("horse", "ros"))
// console.log(minDistance('', 'a'))