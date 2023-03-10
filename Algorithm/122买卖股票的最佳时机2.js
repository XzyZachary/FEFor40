// 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。

// 在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。

// 返回 你能获得的 最大 利润 。


// 输入：prices = [7,1,5,3,6,4]
// 输出：7
// 解释：在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4 。
//      随后，6 在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6 - 3 = 3 。
//      总利润为 4 + 3 = 7 。
// var maxProfit = function(prices) {

//     let res = 0;

//     for (let i = 1; i < prices.length; i++) {
//         res += Math.max(prices[i] - prices[i - 1], 0)
//     }

//     return res;
// };



var maxProfit = function(prices) {

    let dp = Array.from(Array(prices.length), () => Array(2).fill(0))
    dp[0][0] = 0 - prices[0]
    dp[0][1] = 0;

    for (let i = 1; i < prices.length; i++) {
        // 如果第i天持有股票即dp[i][0], 那么可以右两个状态推出来
        // 第i-1天持有股票，那么保持现状，所有现金就是昨天持有的所有的现金
        // 第i天买入股票，所得现金就是昨天不持有股票的所得现金减去股票价格
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i])

        // 如果第i天不持有股票，
        // 第i-1天就不持有股票，那么保持现状
        // 第i天卖出股票，所得现金就是今天价格
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
    }
    
    console.table(dp)
    return dp[prices.length - 1][1];
};


var maxProfit = function (prices) {
    let n = prices.length, have = -prices[0], notHave = 0;

    for (let i = 1; i < n; i++) {
        have = Math.max(have, notHave - prices[i])
        notHave = Math.max(notHave, have + prices[i]);
    }

    return notHave;
}

maxProfit([7,1,5,3,6,4])