// 给定一个数组，包含从 1 到 N 所有的整数，但其中缺了两个数字。你能在 O(N) 时间内只用 O(1) 的空间找到它们吗？

// 以任意顺序返回这两个数字均可。

// 示例 1:

// 输入: [1]
// 输出: [2,3]
// 示例 2:

// 输入: [2,3]
// 输出: [1,4]

// 一个长度为N的数组nums中少了两个数，如果不少这两个数，数组nums的长度为N+2
// 设两个数为x,y
// 可以推出 Sum(1,2...N+1,N+2) == Sum(nums) + x + y
// 即缺少的两个数的和 为：Sum(1,2...N+1,N+2) - Sum(nums)
// 求和公式采用等差数列求和公式 (1+N)*N/2 因为所有数字只出现一次，代表差为1的等差数列
// 找到所少的两个数的和sum后 因为每个数字只出现一次，所以两个数在p=Math.floor(sum/2)的左侧和右侧。
// 即在nums中 nums[0]~p的和 与 1~p的和 的差值为所缺少的一个数字，第二个数字用sum减去即可求到

var missingTwo = function(nums) {
    const n = nums.length + 2
    const sum = (1 + n) * n / 2 - nums.reduce((pre, cur) => pre + cur)
    const mid = sum >> 1;
    let leftSum = (1 + mid) * mid / 2
    for(const num of nums) {
        if (num <= mid) leftSum -= num
    }

    return [leftSum, sum - leftSum]
};

missingTwo([2, 3])