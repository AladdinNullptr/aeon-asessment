const twoSum = function (nums: number[], target: number): number[] {
  const hash = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const remainder = target - num;

    const remainderIndex = hash.get(remainder);

    // ignore duplicate numbers. Only use the first occurrence
    // to cover cases like [0, 1, 2, 2, 3, 5]
    if (remainder === num) continue;

    if (remainderIndex !== undefined) return [remainderIndex + 1, i + 1];

    hash.set(num, i);
  }

  return [];
};

export default twoSum;
