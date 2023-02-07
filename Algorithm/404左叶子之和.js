// 给定二叉树的根节点 root ，返回所有左叶子之和。
var sumOfLeftLeaves = function(root) {


    let queue = [root]
    let count = 0
    while(queue.length) {
        const cur = queue.shift();
        if (cur.left !== null && cur.left.left === null && cur.left.right === null) { // !!!!!
            count += cur.left.val;
        }
        cur.left && queue.push(cur.left) 
        cur.right && queue.push(cur.right)    
    }

    return count;
};