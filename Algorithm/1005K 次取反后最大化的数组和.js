// 给你一个整数数组 nums 和一个整数 k ，按以下方法修改该数组：

// 选择某个下标 i 并将 nums[i] 替换为 -nums[i] 。
// 重复这个过程恰好 k 次。可以多次选择同一个下标 i 。

// 以这种方式修改数组后，返回数组 可能的最大和 。

// 输入：nums = [4,2,3], k = 1
// 输出：5
// 解释：选择下标 1 ，nums 变为 [4,-2,3] 。

var largestSumAfterKNegations = function(nums, k) {

    nums.sort((a, b) => Math.abs(b) - Math.abs(a))

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0 && k > 0) {
            nums[i] = -nums[i];
            k--;
        }
    }

    while(k > 0) {
        nums[nums.length - 1] = -nums[nums.length - 1]
        k--;
    }

    return nums.reduce((a, b) => {
        a + b
    })
};

var largestSumAfterKNegations = function(nums, k) {

    nums.sort((a, b) => Math.abs(b) - Math.abs(a))
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0 && k-- > 0) {
            nums[i] = -nums[i];
        }

        sum += nums[i];
    }

    if(k % 2 > 0) {
        sum -= 2 * nums[nums.length - 1];
    }

    return sum;
};