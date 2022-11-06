/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string[]} wordlist
 *     @param {Master} master
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */



/**
 * @param {string[]} wordlist
 * @param {Master} master
 * @return {void}
 */
var findSecretWord = function (wordlist, master) {
  if (wordlist.length <= 10) wordlist.forEach(x => master.guess(x))

  let matchDic = getMatchDic(), candidateIndexs = wordlist.map((x, i) => i)
  while (true) {
    let curIndex = candidateIndexs[Math.floor(candidateIndexs.length / 2)]
    let guessResult = master.guess(wordlist[curIndex])
    if (guessResult === 6) return

    let nextCandidates = []
    for (let j = 0; j < wordlist.length; j++) {
      if (matchDic[curIndex][j] === guessResult) {
        if (!candidateIndexs.includes(j) || j == curIndex) continue
        nextCandidates.push(j)
      }
    }
    if (nextCandidates.curIndexlength == 0) debugger
    candidateIndexs = nextCandidates
  }

  function getMatchDic() {
    let arr = wordlist.map(x => wordlist.map(y => -1))
    for (let i = 0; i < wordlist.length; i++) {
      for (let j = i + 1; j < wordlist.length; j++) {
        arr[j][i] = arr[i][j] = diff(wordlist[i], wordlist[j])
      }
    }
    return arr
  }

  function diff(a, b) {
    return [0, 1, 2, 3, 4, 5].reduce((v, n) => v + ((a[n] == b[n]) ? 1 : 0), 0)
  }
};


class Master {
  constructor(result) {
    this.result = result
    this.count = 0
  }

  guess(str) {
    console.log(++this.count, diff(str, this.result))
    return diff(str, this.result)
    function diff(a, b) {
      return [0, 1, 2, 3, 4, 5].reduce((v, n) => {
        if (!a) debugger
        return v + ((a[n] == b[n]) ? 1 : 0)
      }, 0)
    }
  }
}


// findSecretWord(
//   ["wichbx", "oahwep", "tpulot", "eqznzs", "vvmplb", "eywinm", "dqefpt", "kmjmxr", "ihkovg", "trbzyb", "xqulhc", "bcsbfw", "rwzslk", "abpjhw", "mpubps", "viyzbc", "kodlta", "ckfzjh", "phuepp", "rokoro", "nxcwmo", "awvqlr", "uooeon", "hhfuzz", "sajxgr", "oxgaix", "fnugyu", "lkxwru", "mhtrvb", "xxonmg", "tqxlbr", "euxtzg", "tjwvad", "uslult", "rtjosi", "hsygda", "vyuica", "mbnagm", "uinqur", "pikenp", "szgupv", "qpxmsw", "vunxdn", "jahhfn", "kmbeok", "biywow", "yvgwho", "hwzodo", "loffxk", "xavzqd", "vwzpfe", "uairjw", "itufkt", "kaklud", "jjinfa", "kqbttl", "zocgux", "ucwjig", "meesxb", "uysfyc", "kdfvtw", "vizxrv", "rpbdjh", "wynohw", "lhqxvx", "kaadty", "dxxwut", "vjtskm", "yrdswc", "byzjxm", "jeomdc", "saevda", "himevi", "ydltnu", "wrrpoc", "khuopg", "ooxarg", "vcvfry", "thaawc", "bssybb", "ccoyyo", "ajcwbj", "arwfnl", "nafmtm", "xoaumd", "vbejda", "kaefne", "swcrkh", "reeyhj", "vmcwaf", "chxitv", "qkwjna", "vklpkp", "xfnayl", "ktgmfn", "xrmzzm", "fgtuki", "zcffuv", "srxuus", "pydgmq"]
//   , new Master("ccoyyo"))



findSecretWord(
  ["gaxckt", "trlccr", "jxwhkz", "ycbfps", "peayuf", "yiejjw", "ldzccp", "nqsjoa", "qrjasy", "pcldos", "acrtag", "buyeia", "ubmtpj", "drtclz", "zqderp", "snywek", "caoztp", "ibpghw", "evtkhl", "bhpfla", "ymqhxk", "qkvipb", "tvmued", "rvbass", "axeasm", "qolsjg", "roswcb", "vdjgxx", "bugbyv", "zipjpc", "tamszl", "osdifo", "dvxlxm", "iwmyfb", "wmnwhe", "hslnop", "nkrfwn", "puvgve", "rqsqpq", "jwoswl", "tittgf", "evqsqe", "aishiv", "pmwovj", "sorbte", "hbaczn", "coifed", "hrctvp", "vkytbw", "dizcxz", "arabol", "uywurk", "ppywdo", "resfls", "tmoliy", "etriev", "oanvlx", "wcsnzy", "loufkw", "onnwcy", "novblw", "mtxgwe", "rgrdbt", "ckolob", "kxnflb", "phonmg", "egcdab", "cykndr", "lkzobv", "ifwmwp", "jqmbib", "mypnvf", "lnrgnj", "clijwa", "kiioqr", "syzebr", "rqsmhg", "sczjmz", "hsdjfp", "mjcgvm", "ajotcx", "olgnfv", "mjyjxj", "wzgbmg", "lpcnbj", "yjjlwn", "blrogv", "bdplzs", "oxblph", "twejel", "rupapy", "euwrrz", "apiqzu", "ydcroj", "ldvzgq", "zailgu", "xgqpsr", "wxdyho", "alrplq", "brklfk"]
  , new Master("hbaczn"))
