// 给你两棵二叉树： root1 和 root2 。

// 想象一下，当你将其中一棵覆盖到另一棵之上时，两棵树上的一些节点将会重叠（而另一些不会）。你需要将这两棵树合并成一棵新二叉树。合并的规则是：如果两个节点重叠，那么将这两个节点的值相加作为合并后节点的新值；否则，不为 null 的节点将直接作为新二叉树的节点。

// 返回合并后的二叉树。

// 注意: 合并过程必须从两个树的根节点开始。

// 输入：root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
// 输出：[3,4,5,5,4,null,7]

var mergeTrees = function(root1, root2) {
    // let queue = [root1, root2]

    // while(queue.length) {
    //     const cur1 = root1.shift();
    //     const cur2 = root1.shift();

    //     cur1.left && queue.push(cur1.left)
    //     cur2.left && queue.push(cur2.left)
    //     cur1.right && queue.push(cur1.right)
    //     cur2.right && queue.push(cur2.right)

    // }


    if (root1 == null) {
        return root2;
    }

    if (root2 == null) {
        return root1;
    }

    const root = new TreeNode(root1.val + root2.val);

    root.left = mergeTrees(root1.left, root2.left)

    root.right = mergeTrees(root1.right, root2.right)

    return root
};