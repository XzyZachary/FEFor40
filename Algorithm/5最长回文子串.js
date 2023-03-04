// 给你一个字符串 s，找到 s 中最长的回文子串。
// 如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。
// 示例 1：
// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
// 示例 2：

// 输入：s = "cbbd"
// 输出："bb"

var longestPalindrome = function(s) {

    let max = ''

    for (let i = 0; i < s.length; i++) {
        helper(i, i)
        helper(i, i + 1)
    }

    function helper(l, r) {
        while (l >= 0 && r < s.length && s[l] == s[r]) {
            l--;
            r++;
        }
        const maxStr = s.slice(l + 1, r + l - 1)
        console.log(333, maxStr)
        if (maxStr.length > max.length) max = maxStr
    }

    return max;
};

var longestPalindrome = (s) => {
    let max = 0
    let start = -1
    const len = s.length;
    for (let i = 0; i < len; i++) {
        let now = 1;
        let l = i - 1;
        while(s[i + 1] === s[i]) {
            now++;
            i++;
        }
        console.log(33, s[i + 1], s[i], i)
        let r = i + 1;
        while(s[l] == s[r] && s[l] !== undefined) {
            now += 2
            l--
            r++
        }

        if (now > max) {
            max = now;
            start = l + 1
        }
    }

    return s.slice(start, start + max)
}

longestPalindrome('babad')