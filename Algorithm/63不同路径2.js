// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish”）。

// 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

// 网格中的障碍物和空位置分别用 1 和 0 来表示。
// 输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
// 输出：2
// 解释：3x3 网格的正中间有一个障碍物。
// 从左上角到右下角一共有 2 条不同的路径：
// 1. 向右 -> 向右 -> 向下 -> 向下
// 2. 向下 -> 向下 -> 向右 -> 向右
var uniquePathsWithObstacles = function(obstacleGrid) {

    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;

    const dp =  Array(m).fill().map(item => Array(n));

    for (let j = 0; j < m; j++) {
        dp[j][0] = obstacleGrid[j][0] == 1 ? 0 : 1;
    }

    for (let i = 0; i < n; i++) {
        dp[0][i] = obstacleGrid[0][i] == 1 ? 0 : 1;
    }

    for (let j = 1; j < m; j++) {
        for (let i = 1; i < n; i++) {
            dp[j][i] = obstacleGrid[j][i] == 1 ? 0 : dp[j][i - 1] + dp[j - 1][i] 
        }
    }

    return dp[m - 1][n - 1]
};


var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j] === 0) {
                if (i == 0) {
                    obstacleGrid[i][j] = obstacleGrid[i][j - 1] ?? 1;
                } else if (j === 0) {
                    obstacleGrid[i][j] = obstacleGrid[i - 1]?.[j] ?? 1;
                } else {
                    obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1]
                }
            } else {
                obstacleGrid[i][j] = 0;
            }
        }
    }

    return obstacleGrid[m - 1][n - 1];
}