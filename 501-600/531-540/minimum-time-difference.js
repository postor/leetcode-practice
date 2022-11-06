/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  let minutes = timePoints.map(x => toMinutes(x))
  minutes.sort((a, b) => a - b)
  let min = 1440 + minutes[0] - minutes[minutes.length - 1]
  for (let i = 1; i < minutes.length; i++) {
    min = Math.min(min, minutes[i] - minutes[i - 1])
  }
  return min

  function toMinutes(str = '') {
    let [h, m] = str.split(':')
    return (h * 60) + (m * 1)
  }
};

// console.log(findMinDifference(["23:59", "00:00"]))