/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){
      return false
    }

    let arr = [],t=x
    while(true){
      let t1 = t%10
      arr.push(t1)
      t = (t-t1)/10
      if(t==0){
        break
      }
    }

    const half = Math.floor(arr.length/2)
    
    for(let i=0;i<half;i++){
      if(arr[i]!==arr[arr.length-1-i]){
        return false
      }
    }

    return true
};

console.log(isPalindrome(121))