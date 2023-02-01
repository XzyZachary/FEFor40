// 39 给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。

// candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。 

// 对于给定的输入，保证和为 target 的不同组合数少于 150 个。

// 输入：candidates = [2,3,6,7], target = 7
// 输出：[[2,2,3],[7]]
// 解释：
// 2 和 3 可以形成一组候选，2 + 2 + 3 = 7 。注意 2 可以使用多次。
// 7 也是一个候选， 7 = 7 。
// 仅有这两种组合。

// 输入: candidates = [2,3,5], target = 8
// 输出: [[2,2,2,2],[2,3,3],[3,5]]

var combinationSum = function(candidates, target) {
    const res = [], path = [];

    candidates.sort((a, b) =>  a - b);

    bracktracking(0, 0, 0);

    function bracktracking(j, sum, index) {
        if (sum == target) {
            res.push(Array.from(path))
            return;
        }

        for (let i = j; i < candidates.length; i++) {
            const n = candidates[i]

            if (n > target - sum) break;

            path.push(n)

            sum += n;
            index++
            bracktracking(i, sum, index);
            console.log(path, index, i, sum, n)
            path.pop()

            sum -= n;
        }
    }
    return res;
};

combinationSum([2, 3, 5], 8)