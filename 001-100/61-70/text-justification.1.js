/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  //用于存放结果
  let rtn = []
  //用于记录当前处理words中第cur个
  let cur = 0
  //这东西叫label，方便控制流程的，比如下面的 break outer
  outer:  
  //外循环每次处理一行的两端对齐，并推入结果中
  while (true) {
    //这一行的词
    let ws = []
    //这一行已经占用的长度
    let len = 0
    //内循环不断从words中取新词放到这行
    while (true) {
      //如果words中的词都处理完了
      if (cur >= words.length) {
        if (ws.length) {
          rtn.push({ ws, len })
        }
        break outer
      }
      //words中的词还没有处理完
      let w = words[cur]
      //如果不能插入新词了，就把这行放到结果中，再次进入外循环
      if (len + ws.length + w.length > maxWidth) {
        rtn.push({ ws, len })
        continue outer
      }
      //还能插入新词，插入并继续内循环
      ws.push(w)
      len += w.length
      cur++
    }
  }
  //返回结果，需要把每行的词转换为两端对齐的格式
  return rtn.map((o) => deal(o.ws, o.len))

  //每行处理（两端对齐）
  function deal(ws, len) {
    let left = maxWidth - len
    //只有一个词
    if (ws.length == 1) return ws[0] + getSpaces(left)
    //平均空隙
    let gaplen = Math.floor(left / (ws.length - 1))
    //多余空隙（优先从左边补）
    let gapLeft = left - gaplen * (ws.length - 1)
    let rtn = '', gapS = getSpaces(gaplen)
    //每个词+平均空隙个空格，如果有多余空隙，则多补1空格
    for (let i = 0; i < ws.length - 1; i++) {
      rtn += ws[i] + gapS
      if (i < gapLeft) rtn += ' '
    }
    //追加本行最后一个词
    rtn += ws[ws.length - 1]
    //返回
    return rtn
  }

  function getSpaces(n) {
    return Array(n).fill(' ').join('')
  }
};

console.log(fullJustify([
  "the", "quick", "brown", 
  "fox", "jumps", "over", 
  "the", "lazy", "dog"], 16).join('\n'))