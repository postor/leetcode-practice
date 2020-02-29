/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dict, sentence) {
  let tire = getTire()
  return sentence.split(' ').map(x => findInTire(x)).join(' ')

  function findInTire(w = '') {
    let t = tire
    for (let i = 0; i < w.length - 1; i++) {
      if (typeof t[w[i]] === 'string') return t[w[i]] // found shorter
      if (t[w[i]] === undefined) return w
      t = t[w[i]]
    }
    return w
  }

  function getTire() {
    let dic = {}
    dict.forEach(x => addWord(x))
    return dic
    function addWord(w = '') {
      let t = dic
      for (let i = 0; i < w.length - 1; i++) {
        if (typeof t[w[i]] === 'string') return // found shorter
        if (t[w[i]] === undefined) t[w[i]] = {}
        t = t[w[i]]
      }
      t[w[w.length - 1]] = w
    }
  }
};

console.log(replaceWords(["cat", "bat", "rat"], "the cattle was rattled by the battery"))