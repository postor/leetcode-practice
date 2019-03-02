/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if(!s) return s
  var len = 1, str = s[0];
  for (var i = 0; i < s.length; i++) {
    for (var j = len + 1; i + j <= s.length; j++) {
      tryPali(i, j)
    }
  }

  return str

  function tryPali(start, rlen){
    if(rlen%2){
      tryPaliOdd(start,(rlen-1)/2,rlen)
      return
    }
    tryPaliEven(start,rlen/2,rlen)
  }

  function tryPaliOdd(start, tlen,rlen) {
    for(var i=0;i<tlen;i++){
      if(s[start+i]!== s[start+(2*tlen-i)]){
        return false
      }
    }
    len = rlen
    str = s.substring(start,start+rlen)
  }

  function tryPaliEven(start, tlen, rlen) {
    for(var i=0;i<tlen;i++){
      if(s[start+i]!== s[start+(2*tlen-i)-1]){
        return false
      }
    }
    len = rlen
    str = s.substring(start,start+rlen)
  }
};

console.log(longestPalindrome('cbbd'))
//console.log(longestPalindrome('babab'))