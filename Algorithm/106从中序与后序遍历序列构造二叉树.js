// 给定两个整数数组 inorder 和 postorder ，其中 inorder 是二叉树的中序遍历， postorder 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。
// 输入：inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
// 输出：[3,9,20,null,null,15,7]

var buildTree = function(inorder, postorder) {
    if (!inorder.length) return null;

    const rootVal = postorder.pop(); // 从后序遍历的数组中获取中间节点的值，即数组最后一个

    let rootIndex = inorder.indexOf(rootVal) // 获取中间节点在中序的下标

    const root = new TreeNode(rootVal)

    root.left = buildTree(inorder.slice(0, rootIndex))

    root.right = buildTree(inorder.slice(rootIndex + 1))
    
    return root;
};