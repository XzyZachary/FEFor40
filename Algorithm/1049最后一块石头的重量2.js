// 有一堆石头，用整数数组 stones 表示。其中 stones[i] 表示第 i 块石头的重量。

// 每一回合，从中选出任意两块石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：

// 如果 x == y，那么两块石头都会被完全粉碎；
// 如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。
// 最后，最多只会剩下一块 石头。返回此石头 最小的可能重量 。如果没有石头剩下，就返回 0。

// 输入：stones = [2,7,4,1,8,1]
// 输出：1
// 解释：
// 组合 2 和 4，得到 2，所以数组转化为 [2,7,1,8,1]，
// 组合 7 和 8，得到 1，所以数组转化为 [2,1,1,1]，
// 组合 2 和 1，得到 1，所以数组转化为 [1,1,1]，
// 组合 1 和 1，得到 0，所以数组转化为 [1]，这就是最优值

var lastStoneWeightII = function(stones) {
    let sum = stones.reduce((s, b) => s + b);

    let dpLen = Math.floor(sum / 2)

    let dp = new Array(dpLen + 1).fill(0);

    for (let i = 0; i < stones.length; i++) {
        for (let j = dpLen; j >= stones[i]; --j) {
            dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i])
        }

    console.log(dp)
    }

    return sum - dp[dpLen] - dp[dpLen];
};


// var lastStoneWeightII = function(stones) {
//     let sum = stones.reduce((s, b) => s + b);
//     let target = Math.floor(sum/2);
//     let dp = new Array(stones.length + 1).fill(0).map(() =>  new Array(target + 1).fill(0))

//     for (let i = 1; i <= stones.length; i++) {
//         for (let j = 1; j <= target; j++) {
//             if (j  - stones[i - 1] > 0) {
//                 dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - stones[i - 1]] + stones[i - 1])
//             } else {
//                 dp[i][j] = dp[i - 1][j]
//             }
//         }
//     }
//     console.table(dp)
// };

lastStoneWeightII([31,26,33,21,40])