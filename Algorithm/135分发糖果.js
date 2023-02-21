// n 个孩子站成一排。给你一个整数数组 ratings 表示每个孩子的评分。

// 你需要按照以下要求，给这些孩子分发糖果：

// 每个孩子至少分配到 1 个糖果。
// 相邻两个孩子评分更高的孩子会获得更多的糖果。
// 请你给每个孩子分发糖果，计算并返回需要准备的 最少糖果数目 。


// 入：ratings = [1,0,2]
// 输出：5
// 解释：你可以分别给第一个、第二个、第三个孩子分发 2、1、2 颗糖果。

// 输入：ratings = [1,2,2]
// 输出：4
// 解释：你可以分别给第一个、第二个、第三个孩子分发 1、2、1 颗糖果。
//      第三个孩子只得到 1 颗糖果，这满足题面中的两个条件。
var candy = function(ratings) {
    const nums = new Array(ratings.length).fill(1);

    for(let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            nums[i] = nums[i - 1] + 1
        }
    }

    for (let i = ratings.length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            nums[i] = Math.max(nums[i], nums[i + 1] + 1)
        }
    }

    let count = candys.reduce((a, b) => {
        return a + b
    })

    return count

};