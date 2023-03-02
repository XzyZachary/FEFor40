// 15. 三数之和
// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请

// 你返回所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组
// 示例 1：
// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]
// 解释：
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
// 不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
// 注意，输出的顺序和三元组的顺序并不重要。

var threeSum = function(nums) {
   let ans = [];
   const len = nums.length;

   if (nums == null || len < 3) return ans;

   nums.sort((a, b) => a - b);

   for (let i = 0; i < len; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] == nums[i-1]) continue;
    let L = i + 1;
    let R = len - 1;
    while(L < R) {
        const sum = nums[i] + nums[L] + nums[R]

        if (sum == 0 ) {
            ans.push([nums[i],nums[L],nums[R]]);
            while(L < R && nums[L] === nums[L + 1]) L++;
            while(L < R && nums[R] == nums[R - 1]) R++;
            L++;
            R--;
        }
        else if (sum < 0) L++;
        else if (sum > 0) R--;
    }
   }
   return ans;

};

threeSum([-1,0,1,2,-1,-4])