/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  const median = quickSelect(nums, parseInt((nums.length + 1) / 2));
  let n = nums.length;

  let left = 0;
  let i = 0;
  let right = n - 1;

  while (i <= right) {

    if (nums[newIndex(i, n)] > median) {
      swap(nums, newIndex(left++, n), newIndex(i++, n));
    }
    else if (nums[newIndex(i, n)] < median) {
      swap(nums, newIndex(right--, n), newIndex(i, n));
    }
    else {
      i++;
    }
  }
};

function quickSelect(array, k) {
  return quickRecurse(0, array.length - 1);

  function quickRecurse(left, right) {
    if (left <= right) {
      let partitionIndex = partition(left, right);
      if (partitionIndex === k - 1) {
        return array[partitionIndex];
      } else if (partitionIndex < k - 1) {
        return quickRecurse(partitionIndex + 1, right);
      } else if (partitionIndex > k - 1) {
        return quickRecurse(left, partitionIndex - 1);
      }
    }
  }

  function partition(left, right) {
    let pivot = array[right];
    let i = left;
    for (let j = left; j < right; j++) {
      if (array[j] < pivot) {
        swap(array, j, i);
        i++;
      }
    }
    swap(array, i, right);
    return i;
  }
}

function swap(list, left, right) {
  let temp = list[left];
  list[left] = list[right];
  list[right] = temp;
}

function newIndex(index, n) {
  return (1 + 2 * index) % (n | 1);
}
console.log(wiggleSort([1, 3, 2, 2, 3, 1]))
// console.log(wiggleSort([4, 5, 5, 6]))
