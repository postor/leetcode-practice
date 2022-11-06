/**
 * @param {number[]} boxes
 * @return {number}
 */
var removeBoxes = function (boxes) {
  if (!boxes.length) return 0
  let groups = getGroups()
  let cache = {}
  let max = r(groups)
  return max
  function r(groups = []) {
    let key = groups.map(x => `${x.num}x${x.count}`).join('|')
    if (cache[key]) return cache[key]
    // console.log(toLog)
    // if (toLog == '1x1|3x2|4x1|3x1|1x1') {
    //   console.log('here')
    // }
    if (!groups.length) {
      return 0
    }

    let maxes = groups.map((x, i, arr) => {
      let [scoreI, newGroups] = removeI(i, arr)
      return scoreI + r(newGroups)
    })
    let max = Math.max(...maxes)
    cache[key] = max
    return max
  }

  function removeI(i, groups = []) {
    let score = Math.pow(groups[i].count, 2)
    if (i > 0 && i < groups.length - 1
      && groups[i - 1].num == groups[i + 1].num) {
      return [score, groups.slice(0, i - 1)
        .concat([new Group(groups[i - 1].num, groups[i - 1].count + groups[i + 1].count)])
        .concat(groups.slice(i + 2))]
    }
    return [score, groups.slice(0, i).concat(groups.slice(i + 1))]
  }

  /**
   * parse boxes into groups
   */
  function getGroups() {
    let groups = [], cur = new Group(boxes[0], 1)
    for (let i = 1; i < boxes.length; i++) {
      if (boxes[i] == cur.num) {
        cur.count++
        continue
      }
      groups.push(cur)
      cur = new Group(boxes[i], 1)
    }
    groups.push(cur)
    return groups
  }

  /**
   * the Group type
   * @param {*} num 
   * @param {*} count 
   */
  function Group(num, count) {
    this.num = num
    this.count = count
  }
};

console.log(removeBoxes([3, 8, 8, 5, 5, 3, 9, 2, 4, 4, 6, 5, 8, 4, 8, 6, 9, 6, 2, 8, 6, 4, 1, 9, 5, 3, 10, 5, 3, 3, 9, 8, 8, 6, 5, 3, 7, 4, 9, 6, 3, 9, 4, 3, 5, 10, 7, 6, 10, 7]))