// 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false 。

var hasPathSum = function(root, targetSum) {
    let res = [];

    var traversal = (node, sum) => {
        
        // 遇到叶子节点，并且计数为0
        if (cnt === 0 && !node.left && !node.right) return true;
        // 遇到叶子节点而没有找到合适的边(计数不为0)，直接返回
        if (!node.left && !node.right) return false;

        //  左（空节点不遍历）.遇到叶子节点返回true，则直接返回true
        if (node.left && traversal(node.left, cnt - node.left.val)) return true;
        //  右（空节点不遍历）  
        if (node.right && traversal(node.right, cnt - node.right.val)) return true;
        return false;
    }

    if (!root) return false

    return traversal(root, targetSum - root.val)
};


var hasPathSum = (root, targetSum) => {
    if (root === null)return false

    let nodeArr = [root]

    let valArr = [0]

    while(nodeArr.length) {
        const curNode = nodeArr.shift()

        const curVal = valArr.shift()

        curVal += curNode.val;

        if (curNode.left === null && curNode.right === null && curVal == targetSum) {
            return true
        }

        if (curNode.left) {
            nodeArr.push(curNode.left)
            valArr.push(curVal)
        }

        if (curNode.right) {
            nodeArr.push(curNode.right)
            valArr.push(curVal)
        }
    }

    return false;
}