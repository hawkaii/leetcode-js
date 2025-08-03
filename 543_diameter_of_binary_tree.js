// Definition for a binary tree node.
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /**
   * @param {TreeNode} root
   * @return {number}
   */
  //** brute force **//
  diameterOfBinaryTree_brute(root) {
    if (!root) return 0;

    let leftHeight = maxHeight(root.left);
    let rightHeight = maxHeight(root.right);
    let diameter = leftHeight + rightHeight;
    let sub = Math.max(
      this.diameterOfBinaryTree(root.left),
      this.diameterOfBinaryTree(root.right),
    );
    return Math.max(diameter, sub);
    function maxHeight(root) {
      if (!root) return 0;
      return 1 + Math.max(maxHeight(root.left), maxHeight(root.right));
    }
  }

  // DFS iterative (stack)
  diameterOfBinaryTree(root) {}
}
