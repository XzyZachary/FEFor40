// 给定一个二叉树的 根节点 root，请找出该二叉树的 最底层 最左边 节点的值。

// 假设二叉树中至少有一个节点。

var findBottomLeftValue = function(root) {


    let queue = [root]

    let resNode;
    while(queue.length) {

        const size = queue.length

        for(let i = 0; i < size; i++) {
            let node = queue.shift();
            if(i === 0) {
                resNode = node.val;
            }
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }

    return resNode
};