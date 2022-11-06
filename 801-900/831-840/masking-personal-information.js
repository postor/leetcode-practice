/**
 * @param {string} s
 * @return {string}
 */
var maskPII = function (s) {
  if (s.includes('@')) {
    let [name, domain] = s.toLowerCase().split('@')
    return name[0] + '*****'
      + name[name.length - 1]
      + '@' + domain
  }

  let phone = s.replace(/\D/g, '')
  let country = phone.length > 10 ? `+${''.padEnd(phone.length - 10,'*')}-` : ''
  return `${country}***-***-${phone.substring(phone.length - 4)}`
};

console.log(maskPII("LeetCode@LeetCode.com"))
console.log(maskPII("1(234)567-890"))