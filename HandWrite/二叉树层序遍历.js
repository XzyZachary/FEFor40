// 给定一个二叉树，返回该二叉树层序遍历的结果，（从左到右，一层一层地遍历）
// 例如：
// 给定的二叉树是{3,9,20,#,#,15,7},
// 该二叉树层序遍历的结果是[[3],[9,20],[15,7]]

var levelOrder = (root) => {
    let res = []

    if (root === null) return res;

    let list = []

    list.push(root)

    while(list.length) {
        let curlen = list.length;

        let newLevel = [];

        for (let i = 0; i < curlen; i++) {
            let node = list.shift()
            newLevel.push(node.val)

            if (node.left) list.push(node.left)
            if (node.right) list.push(node.right)
        }

        res.push(newLevel)
    }

    return res;
}