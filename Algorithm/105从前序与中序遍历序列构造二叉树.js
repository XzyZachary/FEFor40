// 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。

// 输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// 输出: [3,9,20,null,null,15,7]

var buildTree = function(preorder, inorder) {
    if (!preorder.length) return null;
    const rootVal = preorder.shift()
    const findIndex = inorder.indexOf(rootVal);
    const root = new TreeNode(rootVal)
    root.left = buildTree(inorder.slice(0, findIndex), postorder.slice(0, findIndex))
    root.right = buildTree(inorder.slice(findIndex), postorder.slice(findIndex + 1))
    return root;

};