/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    if (isBadVersion(1)) return 1
    return r(1, n)
  };

  function r(start, end) {
    if (start == end) return end + 1
    if (start + 1 == end) return end
    let mid = Math.floor((start + end) / 2)
    let isBad = isBadVersion(mid)
    if (isBad) return r(start, mid)
    return r(mid, end)
  }
};