// 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
// 如果数组中不存在目标值 target，返回 [-1, -1]。
// 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。
// 示例 1：
// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]
// 示例 2：

// 输入：nums = [5,7,7,8,8,10], target = 6
// 输出：[-1,-1]
// 示例 3：

// 输入：nums = [], target = 0
// 输出：[-1,-1]

var searchRange = function(nums, target) {

    let start = 0;
    let end = nums.length - 1;
    let mid;

    while (start <= end) {
        mid = (start + end) >> 1;
        if (nums[mid] == target) break;
        if (nums[mid] > target) end = mid - 1;
        else start = mid + 1;
    }

    if (start > end) return [-1, -1];

    let i = mid,j = mid;
    while (nums[i] === nums[i - 1]) i--;
    while (nums[j] === nums[j + 1]) j++;
    return [i, j]
   
};