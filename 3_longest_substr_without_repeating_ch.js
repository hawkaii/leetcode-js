/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  let l = 0;
  let charSet = new Set();
  let res = 0;

  for (let r = 0; r < s.length; r++) {
    while (charSet.has(s[r])) {
      charSet.delete(s[l]);
      l++;
    }

    charSet.add(s[r]);
    res = Math.max(res, r - l + 1);
  }
  return res;
};
var lengthOfLongestSubstringBrute = function (s) {
  let siz = 0;
  for (let i = 0; i < s.length; i++) {
    let set = new Set();
    for (let j = i; j < s.length; j++) {
      if (set.has(s[j])) {
        break;
      }
      set.add(s[j]);
    }
    siz = Math.max(siz, set.size);
  }

  return siz;
};
console.log(lengthOfLongestSubstring("abcabcb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
