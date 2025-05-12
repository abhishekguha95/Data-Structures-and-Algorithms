/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let arr1 = [];
    let arr2 = [];
    let temp = l1;
    while (temp) {
        arr1.unshift(temp.val);
        temp = temp.next;
    }
    temp = l2;
    while (temp) {
        arr2.unshift(temp.val);
        temp = temp.next;
    }
    let n1 = BigInt(arr1.join(""))
    let n2 = BigInt(arr2.join(""))
    let res = n1 + n2;
    console.log("res", res)
    res = res.toString().split("").reverse().map(ele => Number(ele))
    console.log("res arr", res)
    let head = new ListNode(-1);
    let prev = head
    let curr;
    for (let i = 0; i < res.length; i++) {
        curr = new ListNode(res[i]);
        prev.next = curr
        prev = curr
    }
    console.log(head, head.next)
    return head.next
};
