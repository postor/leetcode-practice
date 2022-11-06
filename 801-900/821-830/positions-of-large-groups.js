/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
    let max = 0, rtn = [], cur = '', start = 0
    for (let i = 0; i < s.length; i++) {
        if (cur == s[i]) continue
        endLast(i - 1)
        cur = s[i]
        start = i
    }
    endLast(s.length - 1)
    return rtn

    function endLast(end) {
        let len = end - start + 1
        if (len<3) return
        rtn.push([start, end])
    }
};

console.log(largeGroupPositions("abcdddeeeeaabbbcd").map(x=>x.join(',')))