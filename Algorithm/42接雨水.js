// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

// 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出：6
// 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。

// 输入：height = [4,2,0,3,2,5]
// 输出：9

var trap = function(height) {
    let stack = [0], res = 0;
    const n = height.length
    if(n <= 2) return 0; // 可以不加

    for (let i = 1; i < n; i++) {
        while (stack.length && height[i] > height[stack[stack.length - 1]]) {
            let mid = stack[stack.length - 1]
            stack.pop();
            if (stack.length) {
                let h = Math.min(height[stack[stack.length - 1]], height[i]) - height[mid];
                let w = i - stack[stack.length - 1] - 1;
                res += h * w;
            }
        }

        stack.push(i);
    }

    return res;
};

var trap = function(height) {
    let ans = 0;
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
 
    while(left < right){
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);
        if (height[left] < height[right]){
            console.log(3, leftMax, height[left], leftMax - height[left])
            ans += leftMax - height[left];
            ++left;
        } else {
            // console.log(4, rightMax, height[right], rightMax - height[right])
            ans += rightMax - height[right];
            --right;
        }
    }
    return ans;
 };

console.log(trap( [0,1,0,2,1,0,1,3,2,1,2,1]))