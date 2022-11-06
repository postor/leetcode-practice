/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */


class NestedInteger {
  constructor() {
    this.list = []
    this.value = 0
    this.isValue = false
  }

  // Return true if this NestedInteger holds a single integer, rather than a nested list.
  //  @return {boolean}
  isInteger() {
    return this.isValue
  }

  //  Return the single integer that this NestedInteger holds, if it holds a single integer
  //  Return null if this NestedInteger holds a nested list
  //  @return {integer}
  getInteger() {
    if (this.isInteger()) return this.value
    return null
  }

  // Set this NestedInteger to hold a single integer equal to value.
  //      @return { void}
  setInteger(value) {
    this.value = value
    this.isValue = true
  }

  // Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
  //      @return { void}
  add(elem) {
    this.list.push(elem)
  }


  // Return the nested list that this NestedInteger holds, if it holds a nested list
  // Return null if this NestedInteger holds a single integer
  // @return { NestedInteger[]}
  getList() {
    if (this.isInteger()) return null
    return this.list
  }
}

/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function (s) {
  if (s[0] != '[') {
    let rtn = new NestedInteger()
    rtn.setInteger(parseInt(s))
    return rtn
  }
  return r()[0]

  function r(from = 1) {
    let list = new NestedInteger(), str = '', cur = from
    while (cur < s.length - 1) {
      switch (s[cur]) {
        case '[':
          {
            let rtn = r(cur + 1, true)
            let [l, f] = rtn
            list.add(l)
            cur = f
          }
          break
        case ']':
          {
            str && addStr(list, str)
            return [list, cur]
          }
        case ',':
          {
            str && addStr(list, str)
            str = ''
          }
          break
        default:
          {
            str += s[cur]
          }
          break
      }
      cur++
    }
    str && addStr(list, str)
    return [list, cur]
    function addStr(list, str) {
      let n = new NestedInteger()
      n.setInteger(parseInt(str))
      list.add(n)
    }
  }
};

// console.log(JSON.stringify(deserialize("[123,[456,[789]]]")))
// console.log(JSON.stringify (deserialize("324")))
// console.log(JSON.stringify(deserialize("[[]]")))

console.log(JSON.stringify(deserialize("[123,456,[788,799,833],[[]],10,[]]")))


