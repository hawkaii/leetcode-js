/**
 * @param {string} s
 * @return {boolean}
 */

function isAlphaNum(c) {
  return (
    (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '10')
  );
}

var isPalindrome = function (s) {
  let new_str = '';
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (isAlphaNum(c)) {
      new_str += c;
    }
  }
  new_str = new_str.toLowerCase();

  let l = new_str.length;

  for (let i = 0; i < l; i++) {
    if (i >= l / 2) {
      break;
    }
    if (new_str[i] !== new_str[l - 1 - i]) {
      return false;
    }
  }
  return true;
};

// Naive method

var isPalindrome1 = function (s) {
  let str = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  if (str === str.split('').reverse().join('')) {
    return true;
  }
  return false;
};
console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome(' '));
/*
"A man, a plan, a canal: Panama"
console.log("race a car")
console.log(" ")
*/
