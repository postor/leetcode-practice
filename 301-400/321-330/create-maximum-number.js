/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function (nums1, nums2, k) {
  let left = nums1.length + nums2.length - k
  let nums = [nums1, nums2]
  let starts = [0, 0]
  let max = new Array(k).fill(0)
  getNext(starts, left)
  return max

  function getNext(starts = [], left = 0, cur = []) {
    // 判定结束
    if (cur.length == k) {
      if (lt(max, cur)) {
        return max = cur
      }
      return
    }

    // 寻找下一个数字
    let maxes = findMax(starts, left)
    for (let x = 0; x < maxes.length; x++) {
      let [ni, nj, v] = maxes[x]
      let offset = nj - starts[ni] + 1
      let st = starts.concat()
      st[ni] = nj + 1
      getNext(st, left - offset + 1, cur.concat(v))
    }
  }

  function lt(x = [], y = []) {
    for (let i = 0; i < x.length; i++) {
      if (x[i] < y[i]) return true
      if (x[i] > y[i]) return false
    }
    return false
  }

  function findMax(starts, left) {
    let max = 0, rtn = []
    for (let i = 0; i < nums.length; i++) {
      for (let j = starts[i]; j <= left + starts[i]; j++) {
        if (nums[i][j] > max) {
          max = nums[i][j]
          rtn = [[i, j, max]]
          continue
        }
        if (nums[i][j] == max) {
          rtn.push([i, j, max])
        }
      }
    }
    return rtn
  }
};

// console.log(maxNumber(
//   [3, 4, 6, 5],
//   [9, 1, 2, 5, 8, 3],
//   5)
// )

// console.log(maxNumber(
//   [6, 7],
//   [6, 0, 4],
//   5)
// )

/*
nums1 = [3, 4, 6, 5]
nums2 = [9, 1, 2, 5, 8, 3]
k = 5

left = num1.len+num2.len-k+1 =4+6-5+1 = 6
nums=[
  [3, 4, 6, 5],
  [9, 1, 2, 5, 8, 3]
]
starts = [0,0], cur=[]

cur=[9] starts=[0,1] left=left-offset+1 = 6-1+1 = 6
cur=[9,8] starts=[0,5] left=6-4+1 = 3

*/