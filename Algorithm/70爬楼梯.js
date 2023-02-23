// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

var climbStairs = function (n) {
    const dp = new Array(n + 1).fill(0);
    const m = 2;
    dp[0] = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (i >= j) {
                dp[i] += dp[i - j];
            }
        }
    }
    return dp[n];
};