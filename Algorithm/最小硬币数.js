// 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

// 你可以认为每种硬币的数量是无限的。

// 输入：coins = [1, 2, 5], amount = 11
// 输出：3 
// 解释：11 = 5 + 5 + 1

var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity)


    dp[0] = 0

    for (let num of coins) {
        for(let j = num; j <= amount; j++) {
            dp[j] = Math.min(dp[j], dp[j - num] + 1)
        }
    }

    console.log(333, dp[amount])
    return dp[amount] == Infinity ? -1 : dp[amount]
};

coinChange([1, 2, 5], 100)