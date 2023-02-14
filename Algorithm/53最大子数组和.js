// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 子数组 是数组中的一个连续部分。

// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

var maxSubArray = function(nums) {
    let dp = Array.from(nums.length).fill(0);
    dp[0] = nums[0]
    let count = nums[0];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i] , nums[i])
        if (dp[i] > count) {
            count = dp[i];
        }
    }
    return count;
};

var maxSubArray = function(nums) {
    let result = -Infinity
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        count += nums[i];
        if (count > result) {
            result = count
        }        
        if (count < 0) {
            count = 0;
        }
    }
    return result;
};




maxSubArray([-2,1,-3,4,-1,2,1,-5,4])