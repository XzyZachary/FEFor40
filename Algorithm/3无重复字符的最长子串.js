// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
// 示例 1:
// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
var lengthOfLongestSubstring = function(s) {
    let arr = [], max = 0;
    for (let i = 0; i < s.length; i++) {
        let index = arr.indexOf(s[i])
        console.log(333, arr, index)
        if (index !== -1) {
            arr.splice(0, index + 1)
        }
        arr.push(s.charAt(i))
        max = Math.max(arr.length, max)
    }
    return max;
};



var lengthOfLongestSubstring = function(s) {
    let map = new Map(), max = 0;
    for (let i = 0, j = 0; j < s.length; j++) {
        if (map.has(s[j])) {
            i = Math.max(map.get(s[j]) + 1, i)
        }
        console.log(j,i, map)
        max = Math.max(max, j - i + 1)
        map.set(s[j], j)
    }
    return max;
}


// var lengthOfLongestSubstring = (s) => {
//     let res = [];
//     let max = 0;
//     for (let str of s) {
//         console.log(res, str)
//         while(res.includes(str)) {
//             res.shift()
//         }
//         res.push(str)

//         max = Math.max(max, res.length)
//     }
//     console.log(max)
//     return max
// }
lengthOfLongestSubstring('abcabcbb')