/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  let dic = new Map()
  for (let w of words) {
    dic.set(w, dic.has(w) ? dic.get(w) + 1 : 1)
  }
  let arr = [...dic.entries()]
  arr.sort((a, b) => (b[1] === a[1])
    ? a[0] > b[0]
      ? 0.1
      : -0.1
    : b[1] - a[1])
  arr.length = k
  return arr.map(x => x[0])
};

// console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"]
//   , 3))