/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function (input) {
  let max = 0
  let paths = []
  let i = 0, count = 0, isFolder = true
  for (let j = 0; j < input.length; j++) {
    switch (input[j]) {
      case '\n': {
        if (isFolder) {
          paths[i] = count
        } else {
          max = Math.max(max, count)
        }
        i = 0, count = 0, isFolder = true
      }
        break
      case '\t': {
        count = paths[i]+1
        i++
      }
        break
      case '.': {
        isFolder = false
        count++
      }
        break
      default:
        count++
        break
    }
  }

  if (!isFolder) {
    max = Math.max(max, count)
  }

  return max
};

console.log(lengthLongestPath("dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext"))
// dir/subdir2/file.ext