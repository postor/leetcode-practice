module.exports.fromArray = (arr = []) => {
  let q = [], i = 0
  enqueue() // root
  while (arr.length) {
    q[i].left = enqueue()
    q[i].right = enqueue()
    i++
  }
  return q[0]

  function enqueue() {
    let v = arr.shift()
    if (v === null) return null
    let n = { val: v, left: null, right: null }
    q.push(n)
    return n
  }
}

module.exports.print = (tree, fn = n => n.val) => {
  return r(tree)
  function r(n, prefix = '- ') {
    if (!n) return
    console.log(prefix + fn(n))
    r(n.left, '  ' + prefix)
    r(n.right, '  ' + prefix)
  }
}