
// 贪心算法
function maxProfit(arr = []) {
  let max = 0;
  for (let i = 1; i < arr.length; i++) {
    const poor = arr[i] - arr[i - 1];
    if (poor > 0) {
      max = max + poor;
    };
  };
  return max;
};

const res = maxProfit([7,6,4,3,1]);

console.log(res);