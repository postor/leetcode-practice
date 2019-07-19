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
/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function (s) {
  if(s[0]!='[') {
    return parseInt(s)
  } 
  return r()
  function r(from = 0) {
    let list = [], str = '', cur = from
    while (cur < s.length) {
      switch (s[cur]) {
        case '[':
          {
            let [l, f] = r(cur + 1, true)
            list.push(l)
            cur = f
          }
          break
        case ']':
          {
            str && list.push(parseInt(str))
            return [list, cur + 1]
          }
        case ',':
          {
            str && list.push(parseInt(str))
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
    str && list.push(parseInt(str))
    return list
  }
};

console.log(JSON.stringify(deserialize("[[]]")))
// console.log(JSON.stringify(deserialize("[123,[456,[789]]]")))
// console.log(typeof (deserialize("324")))