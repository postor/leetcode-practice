/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function (richer, quiet) {
  // dic[x]=y  means for person x, all person in y has more money than x
  let dic = quiet.map(x => (new Set))
  // cache for smallest, loudest[i]=x means for person i, person x is the least quiet person have equal to or more money than the person i. 
  let loudest = quiet.map(x => -1) 
  
  // init dic
  for (let [x, y] of richer) {
    dic[y].add(x)
  }

  // calc each loudest
  return quiet.map((x,i)=>smallest(i))


  // the same as cache, just param `x` as cache index `i` 
  function smallest(x) {
    // if cache exists use cache
    if (loudest[x] != -1) return loudest[x]
    
    // if none has more money than x, return x
    let  cur = x
    if (!dic[x]) {
      return cache(cur)
    }

    // for each y has more money than x, check if update loudest
    for (let y of dic[x]) {
      let z = smallest(y)
      if (quiet[z] < quiet[cur]) {
        cur = z
      }
    }
    return cache(cur)

    function cache(v) {
      loudest[x] = v
      return v
    }
  }

};

console.log(loudAndRich([[1,0],[2,1],[3,1],[3,7],[4,3],[5,3],[6,3]], [3,2,5,4,6,1,7,0]))