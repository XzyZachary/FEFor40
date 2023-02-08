// 给你一个二叉树的根节点 root ， 检查它是否轴对称。


var isSymmetric = function (root) {

    const compareNode = function (left, right) {
        if (left == null && right!== null || left !== null && right == null) {
            return false
        } else if (left == null && right == null) {
            return true
        } else if (left.val !== right.val) {
            return false
        }


        let outside = compareNode(left.left, right.right)

        let inside = compareNode(left.right,right.left)

        return outside && inside
    }

    if (root == null) {
        return false
    }

    return compareNode(root.left, root.right)
}


var isSymmetric = function (root) {
    if(root == null) {
        return true
    }

    let stack = []

    stack.push(root.left)
    stack.push(root.right)

    while(stack.length) {
        let rightNode = stack.pop()

        let leftNode = stack.pop()

        if (rightNode == null && leftNode == null) {
            continue
        }

        if (leftNode == null || rightNode == null || leftNode.val !== rightNode.val) {
            return false
        }

        stack.push(leftNode.left)
        stack.push(rightNode.right)
        stack.push(leftNode.right)
        stack.push(rightNode.left)
    }

    return true;
}
