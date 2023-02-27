// 给定一个整数数组 prices ，它的第 i 个元素 prices[i] 是一支给定的股票在第 i 天的价格。

// 设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。

// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。


// 输入：k = 2, prices = [2,4,1]
// 输出：2
// 解释：在第 1 天 (股票价格 = 2) 的时候买入，在第 2 天 (股票价格 = 4) 的时候卖出，这笔交易所能获得利润 = 4-2 = 2 。
var maxProfit = function(k, prices) {
    if (prices == null || prices.length < 2 || k == 0) {
        return 0;
    }

    let dp = Array.from(Array(prices.length), () => Array(2 * k + 1).fill(0))

    for (let j = 1; j < 2 * k; j += 2) {
        dp[0][j] = 0 - prices[0]
    }

    for (let i = 1; i < prices.length; i++) {
        for (let j = 0; j < 2 * k; j += 2) {
            dp[i][j + 1] = Math.max(dp[i - 1][j + 1], dp[i - 1][j] - prices[i])
            dp[i][j + 2] = Math.max(dp[i - 1][j + 2], dp[i - 1][j + 1] + prices[i])
        }
    }

    return dp[prices.length  - 1][2 * k]
};

var maxProfit = function(k, prices) {
    let n = prices.length;

    let dp = new Array(2 * k + 1).fill(0)

    for (let i = 1; i <= 2 * k; i += 2){
        dp[i] = -prices[0];
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < 2 * k + 1; j++) {
            if (j % 2) {
                dp[j] = Math.max(dp[j], dp[j - 1] - prices[i])
            } else {
                dp[j] = Math.max(dp[j], dp[j - 1] + prices[i])
            }
        }
    }

    return dp[2 * k]
}

const maxProfit = (k, prices) => {
    let n = prices.length;
    let profit = new Array(k); // 求出所有K的状态

    for (let j = 0; j <= k; j++) {
        profit[j] = {
            buy: -prices[0], // 持有
            sell: 0 // 咩有
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= k; j++) {
            profit[j] = {
                sell: Math.max(profit[j].sell, profit[j].buy + prices[i]),
                buy: Math.max(profit[j].buy, profit[j - 1].sell - prices[i])
            }
        }
    }

    return profit[k].sell;
}