// 给定一个正整数 n ，将其拆分为 k 个 正整数 的和（ k >= 2 ），并使这些整数的乘积最大化。

// 返回 你可以获得的最大乘积 。
// 输入: n = 2
// 输出: 1
// // 解释: 2 = 1 + 1, 1 × 1 = 1。
// 输入: n = 10
// 输出: 36
// 解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。

var integerBreak = function(n) {
    let dp = new Array(n + 1).fill(0)

    dp[2] = 1;

    for (let i = 3; i <= n; i++){
        for (let j = 1; j <= i / 2; j++) {
            dp[i] = Math.max(dp[i], dp[i - j] * j, (i - j) * j)
        }
    }

    return dp[n]
};


var integerBreak = function(m) {
    let dp = [];

    dp[1] = 0;
    dp[2] = 1;
    dp[3] = 2;

    for (let i = 4; i <= n; i++) {
        let tempMax = 0;

        for (j = 1; j < i; j++) {
            let cheng = j * (i - j);
            let cheng2 = dp[j] * (i - j);
            let cheng3 = j * dp[i - j];
            let cheng4 = dp[j] * dp[i - j];

            tempMax = Math.max(tempMax, cheng, cheng2, cheng3, cheng4)
        }
        dp[i] = tempMax;
    }

    return dp[n];
}