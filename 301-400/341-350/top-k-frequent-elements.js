/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let top = {}, bottom = {}, dic = {}
  top.next = bottom, bottom.prev = top
  for (let n of nums) {
    if (!dic[n]) {
      const prev = bottom.prev
      dic[n] = {
        count: 1,
        val: n,
        next: bottom,
        prev
      }
      prev.next = dic[n]
      bottom.prev = dic[n]
    } else {
      let node = dic[n]
      node.count += 1
      // detach
      let { prev, next } = node
      prev.next = next
      next.prev = prev
      // find pos
      let t = prev
      while (t != top && t.count < node.count) {
        t = t.prev
      }
      // attach
      let t1 = t.next
      t.next = node
      t1.prev = node
      node.next = t1
      node.prev = t
    }
  }
  let rtn = [], t = top.next
  while (rtn.length < k) {
    rtn.push(t.val)
    t = t.next
  }
  return rtn

};

// console.log(topKFrequent([3, 0, 1, 0],
//   1))