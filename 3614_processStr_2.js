var processStr = function (s, k) {
  let result = '';
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '*':
        result = result.slice(0, -1);
        break;
      case '#':
        result += result;
        break;
      case '%':
        result = result.split('').reverse().join('');
        break;

      default:
        result += s[i];
        break;
    }
  }
  console.log(result);
  if (k < result.length) {
    return result[k];
  } else {
    return '.';
  }
};

console.log(processStr('a#b%*', 1));
console.log(processStr('cd%#*#', 3));
/*
"a#b%*"
1
"cd%#*#"
3
"z*#"
0
*/
