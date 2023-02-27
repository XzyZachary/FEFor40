// 给定一个整数数组prices，其中第  prices[i] 表示第 i 天的股票价格 。​

// 设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:

// 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

//  

// 示例 1:

// 输入: prices = [1,2,3,0,2]
// 输出: 3 
// 解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]

var maxProfit = function(prices) {
    if (prices.length < 2) {
        return 0;
    } else if (prices.length < 3) {
        return Math.max(0, prices[1] - prices[0])
    }

    let dp = Array.from(Array(prices.length), () =>  Array(4).fill(0))

    dp[0][0] = 0 - prices[0];

    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], Math.max(dp[i - 1][1], dp[i - 1][3]) - prices[i]);

        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][3])

        dp[i][2] = dp[i - 1][0] + prices[i]

        dp[i][3] = dp[i - 1][2]
    }

    return Math.max(dp[prices.length - 1][1], dp[prices.length - 1][2], dp[prices.length - 1][3])
};


var maxProfit = function(prices) {
    const n = prices.length;
    const dp = new Array(4).fill(0)

    dp[0] = -prices[0];

    for (let i = 1; i < n; i++) {
        const temp = dp[0]
        const temp1 = dp[2]

        dp[0] = Math.max(dp[0], Math.max(dp[3] - prices[i], dp[1] - prices[i]))

        dp[1] = Math.max(dp[1], dp[3])

        dp[2] = temp + prices[i]

        dp[3] = temp1
    }
}


const maxProfit = function (prices) {
    let n = prices.length;

    let buy = -prices[0]; // 手中有股票

    let sell = 0; // 没有股票
    let profit_freeze = 0;

    for (let i = 1; i < n; i++) {
        let temp = sell;

        sell = Math.max(sell, buy + prices[i])
        buy = Math.max(buy, profit_freeze - prices[i])
        profit_freeze = temp;
    }

    return sell;
}