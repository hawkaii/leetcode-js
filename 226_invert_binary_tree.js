/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root == null) return null;
  let queue = new Queue([root]);

  while (!queue.isEmpty()) {
    let node = queue.pop();
    console.log(node);
  }
};
console.log(invertTree([4, 2, 7, 1, 3, 6, 9]));
console.log(invertTree([2, 1, 3]));
console.log(invertTree([]));
