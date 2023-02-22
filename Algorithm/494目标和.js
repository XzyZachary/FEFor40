// 给你一个整数数组 nums 和一个整数 target 。

// 向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式 ：

// 例如，nums = [2, 1] ，可以在 2 之前添加 '+' ，在 1 之前添加 '-' ，然后串联起来得到表达式 "+2-1" 。
// 返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目。

// 输入：nums = [1,1,1,1,1], target = 3
// 输出：5
// 解释：一共有 5 种方法让最终目标和为 3 。
// -1 + 1 + 1 + 1 + 1 = 3
// +1 - 1 + 1 + 1 + 1 = 3
// +1 + 1 - 1 + 1 + 1 = 3
// +1 + 1 + 1 - 1 + 1 = 3
// +1 + 1 + 1 + 1 - 1 = 3

var findTargetSumWays = function(nums, target) {
    let sum = nums.reduce((a,b) => a+b);
    if(Math.abs(target) > sum) {
        return 0;
    }

    if((target + sum) % 2) {
        return 0;
    }

    const halfSum = (target + sum) / 2;

    let dp = new Array(halfSum+1).fill(0);
    dp[0] = 1;

    for (let i = 0; i < nums.length; i++) {
        for (let j = halfSum; j >= nums[i]; --j) {
            dp[j] += dp[j - nums[i]];
        }
    }
    console.log(dp);
};
findTargetSumWays([1,1,1,1,1], 3)