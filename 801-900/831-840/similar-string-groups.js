/**
 * @param {string[]} strs
 * @return {number}
 */
var numSimilarGroups = function (strs) {
  let grps = [], joinGroupNum = 0
  for (let str of strs) {
    let foundGroupIndexes = new Set()
    grps.forEach((grp, i) => {
      if (isGroup(str, grp)) foundGroupIndexes.add(i)
    })
    if (!foundGroupIndexes.size) {
      grps.push(new Set([str]))
    } else {
      let newGrp = new Set([...foundGroupIndexes]
        .map(i => [...grps[i]])
        .flat())
      newGrp.add(str)
      grps = grps.filter((x, i) => !foundGroupIndexes.has(i))
      grps.push(newGrp)
    }
  }
  return grps.length

  function isGroup(str, grp) {
    for (let s of grp) {
      if (isSimilar(s, str)) {
        return true
      }
    }
    return false
  }

  function isSimilar(str1 = '', str2 = '') {
    if (str1 === str2) return true
    let is = []
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] != str2[i]) {
        is.push(i)
        if (is.length > 2) {
          return false
        }
      }
    }
    return true
  }

};

console.log(numSimilarGroups(["tars", "rats", "arts", "star"])) //2
console.log(numSimilarGroups(["omv", "ovm"])) //1