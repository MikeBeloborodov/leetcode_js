/*
  https://leetcode.com/problems/maximum-depth-of-binary-tree/

  Given the root of a binary tree, return its maximum depth.

  A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
  * */

import { createTree, Node } from "../../utils/utils";

const maxDepth = <T>(root: Node<T> | null): number => {
  let maxDepth = 0;

  const recursion = <T>(root: Node<T> | null, level: number): void => {
    if (!root) return;

    if (level > maxDepth) maxDepth = level;
    recursion(root.left, level + 1);
    recursion(root.right, level + 1);
  };
  recursion(root, 1);
  return maxDepth;
};

const root1 = createTree([1, 2, 3, 4, 5, 6, 7, null, 8], 0);
const root2 = createTree([1, 2, 3], 0);
const case1 = maxDepth(root1);
const case2 = maxDepth(root2);
console.table([
  {
    name: "case1",
    expected: 4,
    result: case1,
    isCorrect: case1 === 4,
  },
  {
    name: "case2",
    expected: 2,
    result: case2,
    isCorrect: case2 === 2,
  },
]);
