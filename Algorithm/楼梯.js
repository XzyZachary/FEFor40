// 一个人每次只能走一层楼梯或者两层楼梯，问走到第 80 层楼梯一共有多少种方法

// dp dp dp dp dp dp dp dp dp dp dp dp dp dp dp dp

function louti(num) {
  let dp = new Array(num);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= num; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[num]
}
