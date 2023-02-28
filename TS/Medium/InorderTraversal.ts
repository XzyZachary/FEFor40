// InorderTraversal

// Implement the type version of binary tree inorder traversal.

// For example:

const tree1 = {
    val: 1,
    left: null,
    right: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null,
        },
        right: null,
    },
} as const

type A = InorderTraversal<typeof tree1> // [1, 3, 2]


interface TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
}
type InorderTraversal<T extends TreeNode | null> = T extends TreeNode ? InorderTraversal<T['left']>  extends infer L ? InorderTraversal<T['right']> extends infer R ? [...(L extends [...infer _L] ? _L : []), T['val'], ...(R extends [...infer _R] ? _R : [])] : never : never : [];
