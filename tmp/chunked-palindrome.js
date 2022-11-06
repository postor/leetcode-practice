// Normal palindrome is defined as a string that reads the same backwards as forwards, for example "abccba".
// Chunked palindrome is defined as a string that you can split into chunks and it will form a palindrome.
// For example, "volvo". You can split it into (vo)(l)(vo). Let A = "vo", B = "l", so the original string is ABA which is a palindrome.

// Given a string str, find the maximum number of chunks we can split that string to get a chuncked palindrome.

function chunkedPalindrome(str = '') {
  if (str.length < 2) return 1

  let left = 0, right = str.length - 1, count = 0
  

}

console.log(chunkedPalindrome("voabcvo"))