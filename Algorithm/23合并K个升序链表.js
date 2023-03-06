// 给你一个链表数组，每个链表都已经按升序排列。
// 请你将所有链表合并到一个升序链表中，返回合并后的链表。
// 示例 1：
// 输入：lists = [[1,4,5],[1,3,4],[2,6]]
// 输出：[1,1,2,3,4,4,5,6]
// 解释：链表数组如下：
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// 将它们合并到一个有序链表中得到。
// 1->1->2->3->4->4->5->6

var mergeKLists = (lists) => {
    const list = []

    for (let i = 0; i < lists.length; i++) {
        const node = lists[i]

        while (node) {
            list.push(node.val)
            node = node.next;
        }
    }

    list.sort((a, b) => a - b)
    const res = new ListNode();
    let now = res;

    for (let i = 0; i < list.length; i++) {
        now.next = new ListNode(list[i])
        now = now.next;
    }
    return res.next;
}

// ========================


var mergeKLists = function(lists) {
    if (!lists.length) return null;
    return mergeList(lists, 0, lists.length - 1)
};


var mergeList = (lists, start, end) => {
    if (start == end) {
        return lists[start];
    }

    const mid = start + ((end - start) >> 1);
    const leftList = mergeList(lists, start, mid)
    const rightList = mergeList(lists, mid + 1, end);
    return merge(leftList, rightList);
}

function merge(head1, head2) {
    let newHead =  new ListNode(0), p = newHead;

    while(head1 && head2) {
        if (head1.val <= head2.val) {
            p.next = head1;
            head1 = head1.next;
        } else {
            p.next = head2;
            head2 = head2.next;
        }
        p = p.next;
    }

    p.next = head1 ? head1 : head2;
    return newHead.next;
}