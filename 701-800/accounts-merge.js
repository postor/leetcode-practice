/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
  let emailIdDic = new Map(), idDic = new Map()
  for (let i = 0; i < accounts.length; i++) {
    let arr = accounts[i]
    let name = arr[0], emails = {}
    loopFromSecond(arr, email => {
      if (emailIdDic.has(email)) {
        // if(emailIdDic.get(email)==3) debugger
        removeAndSetEmails(emailIdDic.get(email), emails)
      } else {
        emails[email] = true
      }
    })
    idDic.set(i, { name, emails })
    for (let email of Object.keys(emails)) {
      emailIdDic.set(email, i)
    }
  }

  return [...idDic.values()].map(({ name, emails }) => [name, ...Object.keys(emails).sort()])

  function removeAndSetEmails(id, dic) {
    if (!idDic.get(id)) return
    let { emails } = idDic.get(id)
    Object.assign(dic, emails)
    // if (id == 3) debugger
    idDic.delete(id)
  }
  function loopFromSecond(arr, cb) {
    for (let j = 1; j < arr.length; j++) {
      cb(arr[j])
    }
  }
};

console.log(JSON.stringify(accountsMerge([["Alex", "Alex5@m.co", "Alex4@m.co", "Alex0@m.co"], ["Ethan", "Ethan3@m.co", "Ethan3@m.co", "Ethan0@m.co"], ["Kevin", "Kevin4@m.co", "Kevin2@m.co", "Kevin2@m.co"], ["Gabe", "Gabe0@m.co", "Gabe3@m.co", "Gabe2@m.co"], ["Gabe", "Gabe3@m.co", "Gabe4@m.co", "Gabe2@m.co"]]
)))