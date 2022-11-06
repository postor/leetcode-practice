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
  let its = [() => getNext(starts, left)]
  for (let i = 0; i < k; i++) {
    let tmp = its
    its = []
    let tmp1 = tmp.map(x => x())
    max[i] = Math.max(...(tmp1.map(([x]) => x)))
    tmp1
      .filter(([x]) => x == max[i])
      .forEach(([x, nexts]) => its = its.concat(nexts))
  }
  return max

  function getNext(starts = [], left = 0) {
    // 寻找下一个数字
    let maxes = findMax(starts, left), max = 0
    let nexts = []
    for (let x = 0; x < maxes.length; x++) {
      let [ni, nj, v] = maxes[x]
      max = v
      let offset = nj - starts[ni] + 1
      let st = starts.concat()
      st[ni] = nj + 1
      nexts.push(() => getNext(st, left - offset + 1))
    }
    return [max, nexts]
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

console.log(maxNumber(
  [4, 6, 9, 1, 0, 6, 3, 1, 5, 2, 8, 3, 8, 8, 4, 7, 2, 0, 7, 1, 9, 9, 0, 1, 5, 9, 3, 9, 3, 9, 7, 3, 0, 8, 1, 0, 9, 1, 6, 8, 8, 4, 4, 5, 7, 5, 2, 8, 2, 7, 7, 7, 4, 8, 5, 0, 9, 6, 9, 2]
  , [9, 9, 4, 5, 1, 2, 0, 9, 3, 4, 6, 3, 0, 9, 2, 8, 8, 2, 4, 8, 6, 5, 4, 4, 2, 9, 5, 0, 7, 3, 7, 5, 9, 6, 6, 8, 8, 0, 2, 4, 2, 2, 1, 6, 6, 5, 3, 6, 2, 9, 6, 4, 5, 9, 7, 8, 0, 7, 2, 3]
  , 60)
)

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