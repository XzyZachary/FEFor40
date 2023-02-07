var minDepth =  (root) => {
    if(!root) return 0;
    let queue = [root]

    let count = 0;
    while(true) {
        const len = queue.length
        count++;
        while(len--) {
            const cur = queue.shift();

            if (cur.left == null && cur.right == null) {
                return
            }

            cur.left && queue.push(cur.left)
            
            cur.right && queue.push(cur.right)
        }
    }
    return count;
}