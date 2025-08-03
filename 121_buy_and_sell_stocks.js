/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let l = 0,
    r = 1;
  let maxP = 0;

  while (r < prices.length) {
    if (prices[l] < prices[r]) {
      let diff = prices[r] - prices[l];
      maxP = Math.max(maxP, diff);
    } else {
      l = r;
    }
    r++;
  }

  return maxP;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
