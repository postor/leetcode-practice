/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.arr = nums
  this.ori = nums.concat()
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  this.arr = this.ori.concat()
  return this.arr
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  return shuffle(this.arr)

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      // And swap it with the current element.
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }

    return array;
  }
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

// var obj = new Solution([-6, 10, 184])
// for (let i = 0; i < 5000; i++) {
//   console.log(obj.reset())
//   console.log(obj.shuffle())
// }