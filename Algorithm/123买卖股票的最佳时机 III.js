// 给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。

// 设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。

// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

// 输入：prices = [3,3,5,0,0,3,1,4]
// 输出：6
// 解释：在第 4 天（股票价格 = 0）的时候买入，在第 6 天（股票价格 = 3）的时候卖出，这笔交易所能获得利润 = 3-0 = 3 。
//      随后，在第 7 天（股票价格 = 1）的时候买入，在第 8 天 （股票价格 = 4）的时候卖出，这笔交易所能获得利润 = 4-1 = 3 。

var maxProfit = function(prices) {
    const len = prices.length;

    const dp = new Array(len).fill(0).map(x => new Array(5).fill(0))

    dp[0][1] = -prices[0];
    dp[0][3] = -prices[0];

    for (let i = 1; i < len; i++) {
        dp[i][0] = dp[i - 1][0];
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
        dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i])
        dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] - prices[i])
        dp[i][4] = Math.max(dp[i - 1][4], dp[i - 1][3] + prices[i])
    }

    console.table(dp)
};

var maxProfit  = prices => {
    const len = prices.length;
    const dp = new Array(5).fill(0)

    dp[1] = -prices[0]
    dp[3] = -prices[0]

    for (let i = 1; i < len; i++) {
        dp[1] = Math.max(dp[1], dp[0] - prices[i])
        dp[2] = Math.max(dp[2], dp[1] + prices[i])
        dp[3] = Math.max(dp[3], dp[2] - prices[i])
        dp[4] = Math.max(dp[4], dp[3] + prices[i])
    }
}







maxProfit([3,3,5,0,0,3,1,4])