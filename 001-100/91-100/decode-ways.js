/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  let str = s
  let dic = {}
  for (let i = 1; i <= 26; i++) {
    dic[i] = true
  }

  //可能性总数
  let count = 0
  //递归调用自身并将可能的总数更新
  tryStep()
  //返回总数
  return count

  /**
   * 尝试从本下标开始的解码可能
   * 并递归调用自己尝试下一步
   * @param {number} cur 当前的字符下标
   */
  function tryStep(cur = 0) {
    //如果已经尝试到头
    if (cur == str.length) {
      //更新总数
      count++
      return
    }

    //取当前字符递归尝试下一步
    let n = str[cur]
    if (dic[n]) {
      tryStep(cur + 1)
    }
    //取当前和当前+1两个字符尝试下一步
    if (cur + 1 < str.length) {
      if (dic[n + str[cur + 1]]) {
        tryStep(cur + 2)
      }
    }
  }
};