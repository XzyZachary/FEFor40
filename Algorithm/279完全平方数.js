// 给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。

// 完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。

// 输入：n = 12
// 输出：3 
// 解释：12 = 4 + 4 + 4。

// 输入：n = 13
// 输出：2
// 解释：13 = 4 + 9
var numSquares = function(n) {
    let dp = new Array(n + 1).fill(Infinity)
    dp[0] = 0;

    for (let i = 1; i < n; i++) {
        for (let j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i - j * j] + 1, dp[i])
        }
        console.log(dp)
    }

    return dp[n]
};

numSquares(12)