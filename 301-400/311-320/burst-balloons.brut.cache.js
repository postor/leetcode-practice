/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  if (!nums.length) return 0
  let cache = {}, cachehit = 0, cacheChosen = {}
  let rtn = r(nums)
  // console.log({ cachehit })
  // printChosen()
  return rtn
  function r(arr = []) {
    if (arr.length == 1) return arr[0]
    let key = arr.join(',')
    if (cache[key]) return cachehit++ , cache[key]
    // 比两边都小k的先搞
    const k = 1 / 2
    for (let i = 1; i < arr.length - 1; i++) {
      if (arr[i] <= arr[i - 1] * k) {
        if (arr[i] <= arr[i + 1] * k) {
          let v = getLeft(i, arr) * arr[i] * getRight(i, arr)
          cache[key] = v + r(arr.slice(0, i).concat(arr.slice(i + 1)))
          return cache[key]
        }
        // 存在相等，则优先用邻近大数的
        let j = i + 1
        while (j + 1 < arr.length) {
          if (arr[j] != arr[i]) break
          j++
        }
        if (j > i + 1) {
          if (arr[j] * k >= arr[i]) {
            let toBurst = arr[i - 1] > arr[j] ? i : j - 1
            let v = getLeft(toBurst, arr) * arr[toBurst] * getRight(toBurst, arr)
            cache[key] = v + r(arr.slice(0, toBurst).concat(arr.slice(toBurst + 1)))
            return cache[key]
          }
          if (j == arr.length - 1 && arr[i] == arr[j]) {
            let v = getLeft(i, arr) * arr[i] * getRight(i, arr)
            cache[key] = v + r(arr.slice(0, i).concat(arr.slice(i + 1)))
            return cache[key]
          }
        }
      }
    }

    // 没有比两边都小的了
    let maxes = []
    for (let i = 0; i < arr.length; i++) {
      let v = getLeft(i, arr) * arr[i] * getRight(i, arr)
      v += r(arr.slice(0, i).concat(arr.slice(i + 1)))
      maxes.push(v)
    }
    cache[key] = Math.max(...maxes)
    cacheChosen[key] = maxes.map((x, i) => i).filter(i => maxes[i] == cache[key])[0]
    return cache[key]
  }

  function getLeft(i, arr) {
    if (i > 0) {
      return arr[i - 1]
    }
    return 1
  }

  function getRight(i, arr) {
    if (i < arr.length - 1) {
      return arr[i + 1]
    }
    return 1
  }

  function printChosen() {
    let arr = nums.concat()
    while (arr.length) {
      let key = arr.join(',')
      let i = cacheChosen[key]
      if (i === undefined) break
      console.log([key, i, arr[i]])
      arr = arr.slice(0, i).concat(arr.slice(i + 1))
    }
  }
};

// console.log(maxCoins([7, 9, 8, 0, 7, 1, 3, 5, 5, 2, 3]))
// console.log(maxCoins([8, 3, 4, 3, 5, 0, 5, 6, 6, 2, 8, 5, 6, 2, 3, 8, 3, 5, 1, 0, 2]))
console.log(maxCoins([1, 5, 7, 6, 6, 5, 8, 3, 1, 2, 3, 9, 6, 8, 3, 2, 5, 3, 3, 5, 2, 1, 9, 9, 6, 9, 9, 1, 8]))