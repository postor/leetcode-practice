/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {

  class SortedSet {
    constructor() {
      this.arr = []
    }

    get size() {
      return this.arr.length
    }

    insert(x) {
      let left = 0, right = this.arr.length - 1, arr = this.arr
      if (!arr.length) {
        return arr.push(x)
      }
      if (x < arr[left]) {
        return arr.unshift(x)
      }
      if (x > arr[right]) {
        return arr.push(x)
      }
      while (right - left > 1) {
        let mid = Math.floor((left + right) / 2)
        if (x > arr[mid]) {
          left = mid + 1
        } else {
          right = mid
        }
      }
      if (x == arr[left] || x == arr[right]) return
      arr.splice(right, 0, x)
    }
    get(i) {
      return this.arr[i]
    }
  }

  // Let k be size of given array of prime numbers.
  let k = primes.length

  // Declare a set for super ugly numbers.
  // Insert first ugly number (which is always 1) into set.
  let ugly = new SortedSet()
  ugly.insert(1)

  // Initialize array multiple_of[k] of size k with 0. Each element of this array is iterator for corresponding prime in primes[k] array.
  let multiple_of = new Array(k).fill(0)

  // Initialize nextMultipe[k] array with primes[k]. This array behaves like next multiple variables of each prime in given primes[k] array i.e; nextMultiple[i] = primes[i] * ugly[++multiple_of[i]].
  let nextMultiple = primes.concat()

  // Now loop until there are n elements in set ugly.
  while (ugly.size < n) {
    // console.log('nextMultiple:'+nextMultiple.join('|'))
    // console.log('multiple_of:'+multiple_of.join('|'))
    // a). Find minimum among current multiples of primes in nextMultiple[] array and insert it in the set of ugly numbers.
    let minimum = Math.min(...nextMultiple)
    ugly.insert(minimum)
    // b). Then find this current minimum is multiple of which prime .
    let i = nextMultiple.map((x, j) => j).filter(j => nextMultiple[j] == minimum)[0]
    // c). Increase iterator by 1 i.e; ++multiple_Of[i], for next multiple of current selected prime and update nextMultiple for it.
    multiple_of[i]++
    nextMultiple[i] = primes[i] * ugly.get(multiple_of[i])
  }
  return ugly.get(ugly.size - 1)
};

// console.log(nthSuperUglyNumber(12, [2, 7, 13, 19]))