// 给你一个由 不同 整数组成的数组 nums ，和一个目标整数 target 。请你从 nums 中找出并返回总和为 target 的元素组合的个数。

// 题目数据保证答案符合 32 位整数范围。

// 输入：nums = [1,2,3], target = 4
// 输出：7
// 解释：
// 所有可能的组合为：
// (1, 1, 1, 1)
// (1, 1, 2)
// (1, 2, 1)
// (1, 3)
// (2, 1, 1)
// (2, 2)
// (3, 1)
// 请注意，顺序不同的序列被视作不同的组合。

var combinationSum4 = function(nums, target) {
    let dp = new Array(target + 1).fill(0);
    dp[0] = 1

    for (let i = 0; i <= target; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i >= nums[j]) {
                dp[i] += dp[i - nums[j]]
            }
        }
        console.log(33, dp)
    }
};

combinationSum4([1, 2, 3], 4)