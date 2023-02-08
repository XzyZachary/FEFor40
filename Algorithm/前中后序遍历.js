var preorderTraversal = function(root) {
    let res = []

    const dfs = function(root) {
        if (root === null) return;
        res.push(root.value)
        dfs(root.left);
        dfs(root.right)
    }
    dfs(root)
    return res;
};


var postorderTraversal = function(root) {
    let res = []

    const dfs = function(root) {
        if (root == null) return
        dfs(root.left)
        dfs(root.right)
        res.push(root.value)
    }

    dfs(root)
    return res;
}    


var inorderTraversal = function(root) {
    let res = []

    const dfs = function(root) {
        if (root == null) return
        dfs(root.left)
        res.push(root.value)
        dfs(root.right)
    }

    dfs(root)
    return res;
}    




var inorderTraversal = function(root) {
    if(!root) return [];
    let res = [];

    const stack = [root];
    while(stack.length) {
        const _res = stack.pop();
        res.push(_res.val)
        if (_res.right) stack.push(_res.right)
        if (_res.left) stack.push(_res.left)
    }

    return res;
}


var inorderTraversal = function(root) {
    let res = [];
    let stack = [];
    let cur = root;

    while(stack.length || cur) {
        if (cur) {
            stack.push(cur)
            cur = cur.left
        } else {
            cur = stack.pop()
            res.push(cur.val)

            cur = cur.right
        }
    }

    return res;
}

var behendTraversal = function(root) {
    if(!root) return [];
    let res = [];

    const stack = [root];
    while(stack.length) {
        const _res = stack.pop();
        res.push(_res.val)
        if (_res.right) stack.push(_res.right)
        if (_res.left) stack.push(_res.left)
    }

    return res.reverse();
}