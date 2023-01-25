
/*
A sentence is a string of single-space separated words where each word consists only of lowercase letters.
单空格分隔的单词

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.
“uncommon” 定义为 只出现 1 次，且未出现在另一个字符串中

Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.
返回所有 “uncommon”， 结果数组中元素顺序无关

*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  let dic1 = getDic(s1), dic2 = getDic(s2)
  return [
    ...[...dic1.keys()].filter(x => dic1.get(x) === 1 && !dic2.has(x)),
    ...[...dic2.keys()].filter(x => dic2.get(x) === 1 && !dic1.has(x)),
  ]

  function getDic(str = '') {
    let rtn = new Map
    for (let word of str.split(' ')) {
      rtn.set(word, rtn.has(word) ? rtn.get(word) + 1 : 1)
    }
    return rtn
  }
};

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour")) //["sweet","sour"]
console.log(uncommonFromSentences("apple apple", "banana")) //["banana"]
