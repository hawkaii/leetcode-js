/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  return binary_search(0, nums.length - 1, nums, target);
};
var binary_search = function (l, r, nums, target) {
  if (l > r) return -1;

  let m = l + Math.floor((r - l) / 2);
  // console.log(m);
  if (nums[m] === target) return m;
  return nums[m] < target
    ? binary_search(m + 1, r, nums, target)
    : binary_search(l, m - 1, nums, target);
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));
