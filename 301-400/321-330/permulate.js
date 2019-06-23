function permulate(lefts = [], cur = []) {
  if (lefts.length == 1) {
    cur.push(lefts[0])
    return [cur]
  }
  let rtn = []
  for (let i = 0; i < lefts.length; i++) {
    let c = cur.concat(lefts[i])
    let t = lefts.concat()
    t.splice(i, 1)
    rtn = rtn.concat(permulate(t, c))
  }
  return rtn
}

console.log(permulate([1,2,3]).join('\n'))