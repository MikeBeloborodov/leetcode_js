/*
https://leetcode.com/problems/merge-sorted-array/

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 

Constraints:

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109

  * */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

const merge = (
  nums1: number[],
  m: number,
  nums2: number[],
  n: number,
): void => {
  let [num1Head, num2Head] = [0, 0];
  const nums1Copy = nums1.map((item) => item);
  for (let i = 0; i < m + n; i++) {
    if (
      (nums1Copy[num1Head] <= nums2[num2Head] && num1Head < m) ||
      num2Head === n
    ) {
      nums1[i] = nums1Copy[num1Head];
      num1Head += 1;
      continue;
    } else if (nums2[num2Head] <= nums1Copy[num1Head] || num1Head === m) {
      nums1[i] = nums2[num2Head];
      num2Head += 1;
    }
  }
};

// best solution
var mergeBest = function (
  nums1: number[],
  m: number,
  nums2: number[],
  n: number,
) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }
};

const num1 = [1, 2, 3, 0, 0, 0];
const case1 = merge(num1, 3, [4, 5, 6], 3);
const num2 = [2, 0];
const case2 = merge(num2, 1, [1], 1);
const num3 = [4, 5, 6, 0, 0, 0];
const case3 = merge(num3, 3, [1, 2, 3], 3);
console.table([
  {
    case: "case1",
    result: JSON.stringify(num1),
    expected: JSON.stringify([1, 2, 3, 4, 5, 6]),
    passed: JSON.stringify(num1) === JSON.stringify([1, 2, 3, 4, 5, 6]),
  },
  {
    case: "case2",
    result: JSON.stringify(num2),
    expected: JSON.stringify([1, 2]),
    passed: JSON.stringify(num2) === JSON.stringify([1, 2]),
  },
  {
    case: "case3",
    result: JSON.stringify(num3),
    expected: JSON.stringify([1, 2, 3, 4, 5, 6]),
    passed: JSON.stringify(num3) === JSON.stringify([1, 2, 3, 4, 5, 6]),
  },
]);
