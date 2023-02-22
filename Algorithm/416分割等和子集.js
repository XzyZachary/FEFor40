// 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

// 输入：nums = [1,5,11,5]
// 输出：true
// 解释：数组可以分割成 [1, 5, 5] 和 [11] 。
// 输入：nums = [1,2,3,5]
// 输出：false
// 解释：数组不能分割成两个元素和相等的子集。
var canPartition = function(nums) {

    const sum = nums.reduce((p, v) => p + v)
    if (sum & 1) return false;

    const dp = Array(sum / 2 + 1).fill(0);

    for (let i = 0; i < nums.length; i++) {
        for (let j = sum / 2; j >= nums[i]; j--) {
            console.log(i, j, dp)
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])

            if (dp[j] === sum / 2) {
                return true;
            }
        }
    }

    return dp[sum / 2] === sum / 2;
};

canPartition([1,5,11,5])