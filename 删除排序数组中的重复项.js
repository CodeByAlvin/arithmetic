

/**
 * 双指针思路
 * 1. 用一个读指针，一个写指针遍历数组。
 * 2. 遇到重复的元素 读指针 就继续前移。
 * 3. 遇到不同的元素 写指针 就前移一步，写入那个元素。
 */ 

function removeDuplicates(nums) {
  let p1 = 0; let p2 = 0;
  while (p2 < nums.length) {
    if (nums[p1] !== nums[p2]) {
      p1++;
      nums[p1] = nums[p2];
    };
    p2++;
  };
  return p1 + 1;
};

const res = removeDuplicates([1, 1, 1, 1, 2, 3, 3, 4, 4, 4, 5]);

console.log(res);
