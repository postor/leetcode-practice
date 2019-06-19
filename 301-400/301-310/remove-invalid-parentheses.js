/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
  // 去掉朝外的，并计算需要去掉几个和朝向
  let results = {}
  let brackets = getBrackets(s)
  let toRemoves = minToRemove(brackets)
  remove()
  return Object.keys(results)


  function remove(str = '', i = 0, toRemoveI = 0, left = 0) {
    if (toRemoveI == toRemoves.length) {
      let sub = s.substring(i), l = left
      for (let j = 0; j < sub.length; j++) {
        if (sub[j] == '(') l++
        else if (sub[j] == ')') {
          if (l == 0) return
          l--
        }
      }
      results[str + sub] = true
      return
    }
    if (i == s.length) return

    while (toRemoves[toRemoveI] != s[i]) {
      if (s[i] == '(') {
        left++
      } else if (s[i] == ')') {
        if (left == 0) return
        left--
      }
      str += s[i]
      i++
      if (i == s.length) return
    }

    switch (toRemoves[toRemoveI]) {
      case ')':
        if (left > 0) {
          // 可选不消除
          remove(str + ')', i + 1, toRemoveI, left - 1)
        }
        // 尝试消除的
        return remove(str, i + 1, toRemoveI + 1, left)
      case '(':
        // 可选不消除
        remove(str + '(', i + 1, toRemoveI, left + 1)
        // 可选消除
        remove(str, i + 1, toRemoveI + 1, left)
    }
  }

  /**
   * 
   * @param {string} brackets 
   */
  function minToRemove(brackets) {
    let t = brackets
    while (true) {
      let toKill = []
      for (let i = 0; i < t.length - 1; i++) {
        if (t[i] == '(' && t[i + 1] == ')') toKill.unshift(i)
      }
      if (!toKill.length) break
      toKill.forEach(i => t = t.substring(0, i) + t.substring(i + 2))
    }
    return t
  }

  function getBrackets(t) {
    let all = ''
    for (let i = 0; i < t.length; i++) {
      if (t[i] == '(') {
        all += t[i]
      } else if (t[i] == ')') {
        all += t[i]
      }
    }
    return all
  }
};

// console.log(removeInvalidParentheses("()())()"))
// console.log(removeInvalidParentheses(")()("))
// console.log(removeInvalidParentheses("))()(("))
