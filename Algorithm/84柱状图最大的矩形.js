// 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

// 求在该柱状图中，能够勾勒出来的矩形的最大面积。

// 输入：heights = [2,1,5,6,2,3]
// 输出：10
// 解释：最大的矩形为图中红色区域，面积为 10
 
var largestRectangleArea = function(heights) {
    let stack = [];
    let maxArea = 0
    heights = [0, ...heights, 0];
    let n = heights.length;
    for (let i = 0; i < n; i++) {
        while (heights[i] < heights[stack[stack.length - 1]]) {
            let index = stack.pop();
            console.log(33, stack[stack.length - 1], index,heights[index], maxArea, i, heights[i])
            maxArea  = Math.max(maxArea, heights[index] * (i - stack[stack.length - 1] - 1))
        }
        stack.push(i);
    }
    return maxArea
};

largestRectangleArea([2, 1, 5, 6, 2, 3])