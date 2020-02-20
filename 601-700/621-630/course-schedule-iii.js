
/**
 * @param {number[][]} courses
 * @return {number}
 */
var scheduleCourse = function (courses) {
  if (!courses.length) return 0
  // think it backwards, course with the last end date shall be taken last
  // so we sort with bigger d first
  courses.sort(([t1, d1], [t2, d2]) => d2 - d1)
  // keep note of date and course count, index=count,value = empty before day
  let arr = new Array(courses.length + 1).fill(-1)
  arr[0] = Number.MAX_SAFE_INTEGER, maxCount = 0
  // loop course
  for (let [t, d] of courses) {
    // we update from [maxCount+1] first based on maxCount, then smaller counts
    for (let i = maxCount + 1; i > 0; i--) {
      // if smaller count has enough left days for this course, then arrange it
      arr[i] = Math.max(arr[i], Math.min(arr[i - 1], d) - t)      
      // if we can arrange this course, then we got a new max count
      if (arr[i] > -1 && i > maxCount) maxCount = i
    }
  }
  return maxCount
};

console.log(scheduleCourse([[1, 2], [2, 3]]))