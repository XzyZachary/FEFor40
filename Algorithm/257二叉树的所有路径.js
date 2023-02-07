// 给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。

var binaryTreePaths = function(root) {
    let res = [];
    const dfs = (node, str) => {

        if (!node.left && !node.right) {
            str += node.val;
            res.push(str);
            return
        } 
        
        str += node.val + '->';
        
        node.left && dfs(node.left, str)
        
        node.left && dfs(node.right, str);
    }
    dfs(root, '')
    return res
};