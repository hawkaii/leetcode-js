/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  for (let r of matrix) {
    if (r[r.length - 1] < target) {
      continue;
    }

    let ans = binary_search(0, r.length - 1, r, target) === -1 ? false : true;
    return ans;
  }
  return false;
};

var binary_search = function (l, r, nums, target) {
  if (l > r) return -1;

  let m = l + Math.floor((r - l) / 2);
  // console.log(m);
  if (nums[m] == target) return m;
  return nums[m] < target
    ? binary_search(m + 1, r, nums, target)
    : binary_search(l, m - 1, nums, target);
};

console.log(searchMatrix([[1]], 2));

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3,
  ),
);
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13,
  ),
);
