/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  return findBetween(0, nums.length - 1, target)

  function findBetweenSorted(startIndex, endIndex, target) {
    //等于端点
    if (nums[startIndex] == target) {
      return startIndex
    }
    if (nums[endIndex] == target) {
      return endIndex
    }
    //没有空隙
    if (endIndex - startIndex <= 1) {
      return -1
    }
    if (target < nums[startIndex]) {
      return -1
    }
    if (target > nums[endIndex]) {
      return -1
    }
    let middleIndex = Math.floor((startIndex + endIndex) / 2)
    if (target < nums[middleIndex]) {
      return findBetweenSorted(startIndex + 1, middleIndex - 1, target)
    }
    return findBetweenSorted(middleIndex, endIndex - 1, target)
  }

  function findBetween(startIndex, endIndex, target) {
    //等于端点
    if (nums[startIndex] == target) {
      return startIndex
    }
    if (nums[endIndex] == target) {
      return endIndex
    }
    //没有空隙
    if (endIndex - startIndex <= 1) {
      return -1
    }

    let middleIndex = Math.floor((startIndex + endIndex) / 2)
    if (target < nums[startIndex] && target > nums[endIndex]) {
      return -1
    }
    //前半排序
    if (nums[middleIndex] > nums[startIndex]) {
      if (target > nums[startIndex] && target < nums[middleIndex]) {
        return findBetweenSorted(startIndex + 1, middleIndex, target)
      }
      return findBetween(middleIndex, endIndex - 1, target)
    }
    //后半排序
    if (nums[middleIndex] < nums[endIndex]) {
      if (target > nums[middleIndex] && target < nums[endIndex]) {
        return findBetweenSorted(middleIndex, endIndex - 1, target)
      }
      return findBetween(startIndex + 1, middleIndex, target)
    }
    throw 'bad path'
  }
};

//console.log(search([4,5,6,7,0,1,2],0))
//console.log(search([4,5,6,7,0,1,2],3))
//console.log(search([4, 5, 6, 7, 0, 1, 2], 6))
// console.log(search([8, 1, 2, 3, 4, 5, 6, 7], 6))

