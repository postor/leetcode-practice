/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  let dic = {}
  equations.forEach(([a, b], i) => (setDic(a, b, values[i]), setDic(b, a, 1 / values[i])))
  while (true) {
    let newEq = false
    Object.keys(dic).forEach(a => Object.keys(dic[a]).forEach(b => {
      Object.keys(dic[b]).filter(c => !dic[a][c]).forEach(c => {
        newEq = true
        setDic(a, c, dic[a][b] * dic[b][c])
        setDic(c, a, 1 / (dic[a][b] * dic[b][c]))
      })
    }))
    if (!newEq) break
  }

  return queries.map(x => calc(x))

  function setDic(a, b, v) {
    if (!dic[a]) dic[a] = {}
    dic[a][b] = v
  }

  function calc(exp = []) {
    let [a, b] = exp
    if (dic[a] && dic[a][b]) return dic[a][b]
    return -1.0
  }
};

console.log(calcEquation(
  [["a", "b"], ["b", "c"]],
  [2.0, 3.0], [["a", "c"],
  ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]]))