/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  // 统计statistic

  let dic = {}, usedDic = {}
  for (let i = 0; i < s.length; i++) {
    dic[s[i]] = (dic[s[i]] || 0) + 1
    usedDic[s[i]] = 0
  }

  // cbacdcbc     "abacb"
  // [c]  b       [a] b
  // [b]  a       [ab] a
  // [a]  c       [ab] c
  // [ac] d       [abc] b
  // [acd] c      [abc]
  // [acd] b
  // [acdb] c
  // [acdb] 

  let stack = [], dic2 = { ...dic }
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (usedDic[char]) {
      dic[char]--
      continue
    }
    while (stack.length) {
      let last = stack[stack.length - 1]
      if (last >= char && dic[last]) {
        usedDic[last]--
        stack.pop()
        continue
      } else {
        break
      }
    }
    if (dic[char]) {
      stack.push(char)
      usedDic[char]++
      dic[char]--
    }
  }
  return stack.join('')
};

// console.log(removeDuplicateLetters("cbacdcbc"))
// console.log(removeDuplicateLetters("bbaac"))
console.log(removeDuplicateLetters("abacb"))