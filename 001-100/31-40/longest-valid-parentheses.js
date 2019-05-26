/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let bases = getBaseIndexes()
  while (true) {
    let changed = false, cur = 0
    while (cur < bases.length) {
      if (tryExpand(cur)) {
        changed = true
        continue
      }
      cur++
    }
    if (!changed) {
      break
    }
  }

  let max=0
  bases.forEach(x=>{
    let [l,r] = x
    let len = r-l+1
    if(len>max){
      max = len
    }
  })
  return max

  function tryExpand(cur) {
    if (tryWrap(cur)) {
      return true
    }
    if (tryRight(cur)) {
      return true
    }
  }

  function tryWrap(cur) {
    let [l, r] = bases[cur]
    if (l - 1 >= 0 && r + 1 < s.length) {
      if (s[l - 1] == '(' && s[r + 1] == ')') {
        bases[cur] = [l - 1, r + 1]
        return true
      }
    }
    return false
  }

  function tryRight(cur) {
    let next = bases[cur + 1]
    if (next) {
      let curP = bases[cur]
      if (next[0] == curP[1] + 1) {
        bases[cur] = [curP[0], next[1]]
        bases.splice(cur + 1, 1)
        return true
      }
    }
    return false
  }

  function getBaseIndexes() {
    let arr = [], last = 0
    while (true) {
      let i = s.indexOf('()', last)
      if (i >= 0) {
        arr.push([i, i + 1])
        last = i + 2
        continue
      }
      break
    }
    return arr
  }
};

console.log(longestValidParentheses("(()())"))

/*
var longestValidParentheses = function (s) {
  let max = 0//,str=''
  for(let i = 0;i<s.length-1;i++){
    let len = tryValid(i)
    if(len>max){
      max = len
      //str = s.substr(i,len)
    }
  }
  return max
  function tryValid(start) {
    let stack = [], len = validLen = 0
    while (start + len < s.length) {
      if (s[start + len] == '(') {
        stack.push(')')
      } else {
        if (!stack.length) {
          return validLen
        }
        stack.pop()
        if(!stack.length){
          validLen = len+1
        }
      }
      len++
    }
    return validLen
  }
};

*/