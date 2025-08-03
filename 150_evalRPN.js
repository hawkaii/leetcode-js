var evalRPN = function (tokens) {
  const stack = [];

  for (let c of tokens) {
    let a, b;
    console.log(c);
    switch (c) {
      case "+":
        a = stack.pop();
        b = stack.pop();
        stack.push(a + b);
        break;
      case "-":
        a = stack.pop();
        b = stack.pop();
        stack.push(b - a);
        break;
      case "*":
        a = stack.pop();
        b = stack.pop();
        stack.push(a * b);
        break;
      case "/":
        a = stack.pop();
        b = stack.pop();
        stack.push(Math.trunc(b / a));
        break;
      default:
        stack.push(parseInt(c));
        break;
    }
  }

  return stack[0];
};
console.log(evalRPN(["4", "13", "5", "/", "+"]));
/* console.log(evalRPN(["2", "1", "+", "3", "*"]));
console.log(
  evalRPN([
    "10",
    "6",
    "9",
    "3",
    "+",
    "-11",
    "*",
    "/",
    "*",
    "17",
    "+",
    "5",
    "+",
  ]),
); */
