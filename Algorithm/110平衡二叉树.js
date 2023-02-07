// 本题中，一棵高度平衡二叉树定义为：
// 给定一个二叉树，判断它是否是高度平衡的二叉树
// 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 

var isBalanced = function(root) {
    const getDepth = (node) => {
        if (!node) return 0

        let leftDepth = getDepth(node.left)

        if (leftDepth === -1) return -1

        let rightDepth = getDepth(node.right)

        if (rightDepth == -1) return -1

        if (Math.abs(leftDepth - rightDepth) > 1) {
            return -1;
        } else {
            return 1 + Math.max(leftDepth, rightDepth)
        }
    }

    return !(getDepth(root) === -1)
};