// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

// 问总共有多少条不同的路径？

// 输入：m = 3, n = 2
// 输出：3

var uniquePaths = function(m, n) {
    const dp = Array(m).fill().map(item => Array(n))
    
    for (let j = 0; j < m; j++) {
        dp[j][0] = 1
    }

    for (let i = 0; i < n; i++) {
        dp[0][i] = 1
    }

    for (let j = 1; j < m; j++) {
        for (let i = 1; i < n; i++) {
            dp[j][i] = dp[j][i - 1] + dp[j - 1][i] 
        }
    }

    return dp[m - 1][n - 1]
    
};