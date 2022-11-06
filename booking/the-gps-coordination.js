function processData(input) {
  //Enter your code here
  const MOVE_FUNCS = {
    U: ([x, y]) => [x, y + 1],
    D: ([x, y]) => [x, y - 1],
    L: ([x, y]) => [x - 1, y],
    R: ([x, y]) => [x + 1, y],
  }
  const { p1, p2 } = JSON.parse(input)
  let start1 = p1.start, path1 = p1.path, start2 = p2.start, path2 = p2.path
  for (let i = 0; i <= Math.max(path1.length, path2.length); i++) {
    if (start1[0] === start2[0] && start1[1] === start2[1]) return console.log(start1, i)
    if (path1[i]) start1 = MOVE_FUNCS[path1[i]](start1)
    if (path2[i]) start2 = MOVE_FUNCS[path2[i]](start2)
  }
}

processData(`{"p1":{"start":[0,0],"path":"RUDURURU"},"p2":{"start":[4,4],"path":"LDUDLDLD"}}`)