/*
  https://leetcode.com/problems/maximum-depth-of-binary-tree/

  Given the root of a binary tree, return its maximum depth.

  A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
  * */

interface Root {
  val: number;
  left: Root | null;
  right: Root | null;
}

const maxDepth = (root: Root): number => {
  let maxDepth = 0;

  const recursion = (root: Root | null, level: number): void => {
    if (!root) return;

    if (level > maxDepth) maxDepth = level;
    recursion(root.left, level + 1);
    recursion(root.right, level + 1);
  };
  recursion(root, 1);
  return maxDepth;
};
