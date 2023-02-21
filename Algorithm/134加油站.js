// 在一条环路上有 n 个加油站，其中第 i 个加油站有汽油 gas[i] 升。

// 你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。你从其中的一个加油站出发，开始时油箱为空。

// 给定两个整数数组 gas 和 cost ，如果你可以绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1 。如果存在解，则 保证 它是 唯一 的。

// 输入: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
// 输出: 3
// 解释:
// 从 3 号加油站(索引为 3 处)出发，可获得 4 升汽油。此时油箱有 = 0 + 4 = 4 升汽油
// 开往 4 号加油站，此时油箱有 4 - 1 + 5 = 8 升汽油
// 开往 0 号加油站，此时油箱有 8 - 2 + 1 = 7 升汽油
// 开往 1 号加油站，此时油箱有 7 - 3 + 2 = 6 升汽油
// 开往 2 号加油站，此时油箱有 6 - 4 + 3 = 5 升汽油
// 开往 3 号加油站，你需要消耗 5 升汽油，正好足够你返回到 3 号加油站。
// 因此，3 可为起始索引

var canCompleteCircuit = function(gas, cost) {
    for(let i = 0; i < cost.length; i++) {
        let rest = gas[i] - cost[i]  //记录剩余油量
        // 以i为起点行驶一圈，index为下一个目的地
        let index = (i + 1) % cost.length
        while(rest > 0 && index !== i) {
            rest += gas[index] - cost[index]
            index = (index + 1) % cost.length
        }
        if(rest >= 0 && index === i) return i
    }
    return -1
};

var canCompleteCircuit = function(gas, cost) {
    const gasLen = gas.length;

    let start = 0;
    let curSum = 0;
    let totalSum = 0;

    for (let i = 0; i < gasLen; i++) {
        curSum += gas[i] - cost[i]
        totalSum += gas[i] - cost[i]

        if (curSum < 0) {
            curSum = 0
            start = i + 1
        }
    }

    if (totalSum < 0) return -1

    return start;
}