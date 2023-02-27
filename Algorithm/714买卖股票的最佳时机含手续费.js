// 给定一个整数数组 prices，其中 prices[i]表示第 i 天的股票价格 ；整数 fee 代表了交易股票的手续费用。

// 你可以无限次地完成交易，但是你每笔交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。

// 返回获得利润的最大值。

// 注意：这里的一笔交易指买入持有并卖出股票的整个过程，每笔交易你只需要为支付一次手续费。
// 输入：prices = [1, 3, 2, 8, 4, 9], fee = 2
// 输出：8
// 解释：能够达到的最大利润:  
// 在此处买入 prices[0] = 1
// 在此处卖出 prices[3] = 8
// 在此处买入 prices[4] = 4
// 在此处卖出 prices[5] = 9
// 总利润: ((8 - 1) - 2) + ((9 - 4) - 2) = 8

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-transaction-fee
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// var maxProfit = function(prices, fee) {
//     let result = 0
//     let minPrice = prices[0]

//     for (let i = 1; i < prices.length; i++) {
//         if (prices[i] < minPrice){
//             minPrice = prices[i]
//         }

//         if (prices[i] >= minPrice && prices[i] <= minPrice + fee) {
//             continue
//         }

//         if (prices[i] > minPrice + fee) {
//             result += prices[i] - minPrice - fee
//             minPrice = prices[i] - fee
//         }
//     }

//     return result;
// };

var maxProfit = (prices, fee) => {
    let dp = Array.from(Array(prices.length), () => Array(2).fill(0))
    dp[0][0] = 0 - prices[0]
    for (let i = 1; i < prices.length; i++) {
        dp[i][0] =  Math.max(dp[i - 1][0], dp[i - 1][1] - prices[1])
        dp[i][1] = Math.max(dp[i - 1][0] + prices[i] - fee, dp[i - 1][1])
    }
    return Math.max(dp[prices.length - 1][0], dp[prices.length - 1][1]);
}

var maxProfit = function (prices, fee) {

    // 滚动数组
    // have表示当天持有股票的最大收益
    // notHave表示当天不持有股票的最大收益
    // 把手续费算在买入价格中

    let n = prices.length, have = -prices[0]-fee, notHave = 0;

    for (let i = 1; i < n; i++) {
        // 第i天持有股票的最大收益由两种情况组成
        // 第i-1天就已经持有股票，第i天什么也没做
        // 第i-1天不持有股票，第i天更买入
        have = Math.max(have, notHave - prices[i] - fee);

        // 第i天不持有股票的最大收益
        // 第i-1天就已经不持有股票，第i天什么也没有
        // 第i-1天持有股票，第i天刚卖出
        notHave = Math.max(notHave, have + prices[i]);
    }
}

maxProfit([1, 3, 2, 8, 4, 9], 2)