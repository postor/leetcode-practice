/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function (IP) {
  if (isV4(IP)) return 'IPv4'
  if (isV6(IP)) return 'IPv6'
  return 'Neither'

  function isV4(s = '') {
    let parts = s.split('.')
    if (parts.length != 4) return false
    return parts.every(x => isUnit(x))

    function isUnit(s = '') {
      if (/^0\S+$/.test(s)) return false
      if (!/^\d+$/.test(s)) return false
      if (parseInt(s) > 255) return false
      return true
    }
  }

  function isV6(s = '') {
    let parts = s.split(':')
    if (parts.length != 8) return false
    return parts.every(x => isUnit(x))

    function isUnit(s = '') {
      // if (s.length == 1) {
      //   return s == '0'
      // }
      // if (s.length != 4) return false
      if (s.length > 4 || s.length < 1) return false
      if (!/^[a-f|A-F|\d]+$/.test(s)) return false
      return true
    }
  }
};



// console.log(validIPAddress("018.16.254.1"), 'none')
// console.log(validIPAddress("2001:0db8:85a3:033:0:8A2E:0370:7334"),'v6')
// console.log(validIPAddress("172.16.254.1"))
// console.log(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334"))
// console.log(validIPAddress("256.256.256.256"))