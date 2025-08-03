var processStr = function (s) {
  let result = '';
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '*':
        result.slice(0, -1);
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
  return result;
};

processStr('H#llo%');
