/**
 * @param {number[]} boxes
 * @return {number}
 */
var removeBoxes = function (boxes) {
  if (!boxes.length) return 0
  let groups = getGroups()
  let cache = {}
  let rtn = maxScore(0, groups.length - 1)
  return rtn

  /**
   * max score from groups[l] to groups[r]
   * @param {*} l 
   * @param {*} r 
   */
  function maxScore(l, r) {
    let key = l + '-' + r
    if (cache[key]) return cache[key]
    // same index
    if (l == r) {
      return groups[l].count * groups[l].count
    }
    // neighbour
    if (l + 1 == r) {
      return groups[l].count * groups[l].count
        + groups[r].count * groups[r].count
    }

    let max = 0

    // case 1, try to find groups with same num 
    {
      if (groups[l].num == groups[r].num) {
        max = sameLRMax(l, r)
      }
    }

    // case 2, try to devide into two small groups
    {
      for (let k = l; k < r; k++) {
        // left part = [l,k] right part [k+1,r]
        let t = maxScore(l, k) + maxScore(k + 1, r)
        if (t > max) max = t
      }
    }

    cache[key] = max
    return max
  }

  /**
   * special for ends with same num
   * @param {*} l 
   * @param {*} r 
   */
  function sameLRMax(l, r) {
    let key = l + '-' + r
    if (cache[key]) return cache[key]

    // let toLog = groups.slice(l, r + 1).map(x => `${x.num}x${x.count}`).join('|')
    // console.log(toLog)
    let max = 0, num = groups[l].num
    let count = groups[l].count + groups[r].count
    m(l + 1, count, 0)
    cache[key] = max
    return max

    /**
     * recursively find max
     * @param {*} from start index
     * @param {*} curCount current same num count
     * @param {*} before scores before [from] index
     */
    function m(from, curCount, before) {
      for (let i = from; i < r; i++) {
        if (groups[i].num != num) continue
        // use  
        m(i + 1, curCount + groups[i].count, before + maxScore(from, i - 1))
      }
      // not use
      let after = maxScore(from, r - 1)
      let t = before + after + curCount * curCount
      max = Math.max(t, max)
    }
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

console.log(removeBoxes([1, 3, 2, 2, 2, 3, 4, 3, 1]))