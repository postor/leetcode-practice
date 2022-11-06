/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  let dics = words.map(x => toDic(x))
  let index = -1, liceneDic = toDic([...licensePlate.matchAll(/[a-zA-Z]/g)]
    .map(x => x[0])
    .join(''))
  for (let [i, word] of words.entries()) {
    if (!match(liceneDic, dics[i])) continue
    if (index != -1 && word.length >= words[index].length) continue
    index = i
  }
  return words[index]

  function toDic(str = '') {
    let obj = {}
    for (let char of str.toLowerCase()) {
      obj[char] = (obj[char] || 0) + 1
    }
    return obj
  }

  function match(reqDic, dic) {
    for (let k in reqDic) {
      if (!dic[k] || dic[k] < reqDic[k]) return false
    }
    return true
  }
};

console.log(shortestCompletingWord("1s3 456"
  , ["looks", "pest", "stew", "show"]
))