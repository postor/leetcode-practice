/*
 * Complete the 'getRecordsByAgeGroup' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER ageStart
 *  2. INTEGER ageEnd
 *  3. INTEGER bpDiff
 *
 *  https://jsonmock.hackerrank.com/api/medical_records
 */

async function getRecordsByAgeGroup(ageStart, ageEnd, bpDiff) {
  let rtn = [], curPage = 1
  while (true) {
    let res = await fetch('https://jsonmock.hackerrank.com/api/medical_records?page=' + curPage)
    let { total_pages, page, data = [] } = res
    rtn = rtn.concat(data.filter(({ id,userDob, timestamp, vitals }) => {
      let birthStr = userDob.split('-').reverse().join('-')
      let age1t = add_years(new Date(birthStr), ageStart), age2t = add_years(new Date(birthStr), ageEnd)
      if (age1t*1 > timestamp) return false
      if (age2t*1 < timestamp) return false
      let { bloodPressureDiastole, bloodPressureSystole } = vitals
      if (Math.abs(bloodPressureDiastole - bloodPressureSystole) <= bpDiff) return false
      return true
    }))

    curPage = parseInt(page) + 1
    if (curPage > total_pages) break
  }
  return rtn.map(x=>x.id).sort((a,b)=>a-b)

  function add_years(dt, n) {
    return new Date(dt.setFullYear(dt.getFullYear() + n));
  }

  function fetch(url) {
    const options = new URL(url), http = require('https')
    return new Promise((resolve) => {
      const req = http.request(options, (res) => {
        res.setEncoding('utf8');
        let data = ''
        res.on('data', (chunk) => {
          data += chunk
        });
        res.on('end', () => {
          resolve(JSON.parse(data))
        });
      });
      req.end()
    })

  }
}

getRecordsByAgeGroup(28,30,63).then(console.log)