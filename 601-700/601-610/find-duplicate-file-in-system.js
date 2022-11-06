/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {
  let dic = {}
  for (let pathStr of paths) {
    let arr = pathStr.split(' ')
    for (let i = 1; i < arr.length; i++) {
      let [filename, content] = arr[i].split('(')
      if (!dic[content]) dic[content] = []
      dic[content].push(arr[0] + '/' + filename)
    }
  }
  let rtn = []
  for (let k in dic) {
    if (dic[k].length > 1) rtn.push(dic[k])
  }
  return rtn.join('\n')
};

console.log(findDuplicate(["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"]))