// 给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。
// 示例 1:

// 输入: temperatures = [73,74,75,71,69,72,76,73]
// 输出: [1,1,4,2,1,1,0,0]
// 示例 2:

// 输入: temperatures = [30,40,50,60]
// 输出: [1,1,1,0]
// 示例 3:

// 输入: temperatures = [30,60,90]
// 输出: [1,1,0]

var dailyTemperatures = function (T) {
    const res = new Array(T.length).fill(0);
    const stack = [];
    for (let i = T.length - 1; i >= 0; i--) {
        while (stack.length && T[i] >= T[stack[stack.length - 1]]) {
            stack.pop()
        }

        if (stack.length) {
            console.log(i, stack, stack[stack.length - 1] - i)
            res[i] = stack[stack.length - 1] - i
        }
        stack.push(i)
    }

    return res;
};


// var dailyTemperatures = (T) => {
//     const n = T.length;
//     const res = Array(n).fill(0);
//     const stack = [];
//     stack.push(0);

//     for (let i = 1; i < n; i++) {
//         const top = stack[stack.length - 1];

//         if (T[i] < T[top]) {
//             stack.push(i)
//         } else if (T[i] === T[top]) {
//             stack.push(i)
//         } else {
//             console.log(44,stack)
//             while (stack.length && T[i] > T[stack[stack.length - 1]]) {
//                 const top = stack.pop();
//                 res[top] = i - top;
//             }
//             console.log(33, i, res, stack)
//             stack.push(i);
//         }
//     }

//     return res;
// }

dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);