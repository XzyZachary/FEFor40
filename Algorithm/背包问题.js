// 有n件物品和一个最多能背重量为w 的背包。第i件物品的重量是weight[i]，得到的价值是value[i] 。每件物品只能用一次，求解将哪些物品装入背包里物品价值总和最大。


// function testWeightBagProblem (weight, value, size) {
//     const len = weight.length, dp = Array(len).fill().map(() => Array(size + 1).fill(0));


//     for (let j = weight[0]; j <= size; j++) {
//         dp[0][j] = value[0]
//     }


//     for (let i = 1; i < len; i++) {
//         for (let j = 0; j <= size; j++) {
//             console.log(i, j, weight[i], dp[i - 1][j - weight[i]])
//             if (j < weight[i]) dp[i][j] = dp[i - 1][j];
//             else dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i])
//         }
//     }

//     console.table(dp)

//     return dp[len - 1][size];
// }



function testWeightBagProblem(weight, value, size) {
    const len = weight.length, dp = Array(size + 1).fill(0);


    for (let i = 1; i <= len; i++) {
        for (let j = size; j >= weight[i - 1]; j--) {
            dp[j] = Math.max(dp[j], value[i - 1] + dp[j - weight[i - 1]])
        }
        console.log(dp)
    }
    return dp[size];
}

console.log(testWeightBagProblem([1, 3, 4], [15, 20, 30], 4));