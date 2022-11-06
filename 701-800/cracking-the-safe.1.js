/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var crackSafe = function (n, k) {
  let trie = getTrie(), arr = new Array(n).fill(0)

  let rtn = tryNext(trie, arr)
  return rtn.join('')

  function tryNext(used = trie, cur = arr, unfinishedNode = true) {
    if (unfinishedNode instanceof Map) {
      for (let [k, v] of unfinishedNode.entries()) {
        // got repeat
        if (getTrieNode(cur.slice(cur.length - n), used)) continue
        let tmp = tryNext(used, cur.concat([k]), unfinishedNode.get(k))
        if (tmp.length) return tmp
      }
      return []
    }
    let used1 = copyTrie(used)
    setUsed(cur.slice(cur.length - n), used1)
    if (used1.size == 0) return cur

    let subarr = cur.slice(cur.length - n + 1)
    let trieNode = getTrieNode(subarr, used1)
    if (!trieNode) {
      return []
    }
    return tryNext(used1, cur, trieNode)
  }

  function getTrie(left = n) {
    let dic = new Map
    for (let i = 0; i < k; i++) {
      dic.set(i, left == 1 ? true : getTrie(left - 1))
    }
    return dic
  }
  function getTrieNode(indexs = [], trie) {
    let t = trie
    for (let i of indexs) {
      if (!t) return undefined
      t = t.get(i)
    }
    return t
  }
  function setUsed(indexs = [], trie) {
    let t = indexs.concat(), lastIndex = t.pop()
    let node = getTrieNode(t, trie)
    if (!node) debugger
    node.delete(lastIndex)
    if (node != trie && node.size == 0) {
      setUsed(t, trie)
    }
  }

  function copyTrie(trie = new Map) {
    let map = new Map
    for (let [k, v] of trie.entries()) {
      map.set(k, v instanceof Map ? copyTrie(v) : v)
    }
    return map
  }

};
console.log(crackSafe(4, 7))