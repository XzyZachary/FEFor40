var maxDepth = (root) => {
    if (root == null) return

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}


var maxDepth = (root) => {
    if (!root) return 0;
    let count = 0

    const queue = [root]

    while(queue.length) {
        let size = queue.length
        count++

        while(size--) {
            let node = queue.shift()

            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }

    return count
}