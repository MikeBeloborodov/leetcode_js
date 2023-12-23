export interface Node<T> {
  val: T | null;
  left: Node<T> | null;
  right: Node<T> | null;
}

export const createTree = <T>(
  array: (T | null)[],
  i: number,
): Node<T> | null => {
  let root: Node<T> | null = null;

  if (i < array.length && array[i]) {
    root = {
      val: array[i],
      left: createTree(array, 2 * i + 1),
      right: createTree(array, 2 * i + 2),
    };
  }

  return root;
};

export const displayTree = <T>(root: Node<T> | null): void => {
  const stack = [root];

  while (stack.length) {
    const current = stack.pop();

    if (current) {
      console.log(current.val);

      if (current.right) stack.push(current.right);
      if (current.left) stack.push(current.left);
    }
  }
};
