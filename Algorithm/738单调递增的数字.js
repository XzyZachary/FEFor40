// 当且仅当每个相邻位数上的数字 x 和 y 满足 x <= y 时，我们称这个整数是单调递增的。

// 给定一个整数 n ，返回 小于或等于 n 的最大数字，且数字呈 单调递增 。

// 输入: n = 10
// 输出: 9
// 输入: n = 332
// 输出: 299

// var monotoneIncreasingDigits = function(n) {
//     let max = 0;
//     for (let i = n; i > 0; i--) {
//         if (i.toString().split('').sort().join('') == i.toString()) {
//             max = i;
//             return max
//         }
//         // for (let j = 0; j < _t.length; j++) {
//         //     console.log(333, _t[j])
//         //     if (_t[j] > _t[j + 1]) {
//         //         continue;
//         //     }
//         //     max = Math.max(max, _t)
//         // }
//     }
//     // console.log(33, max)
// };
// console.log(3, 
//     monotoneIncreasingDigits(332))

var monotoneIncreasingDigits = function(n) {
    n = n.toString()
    n = n.split('').map(item => {
        return +item;
    })

    let flag = Infinity;

    for (let i = n.length - 1; i > 0; i--) {
        if (n[i - 1] > n[i]) {
            flag = i
            n[i - 1] = n[i - 1] - 1
            n[i] = 9
        }
    }

    for (let i = flag; i < n.length; i++) {
        n[i] = 9
    }
    return +n.join('')
}