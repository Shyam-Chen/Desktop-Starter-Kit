export interface ListNode {
  val: number;
  next: ListNode;
}

export const deleteDuplicates = (head: ListNode): ListNode => {
  let temp = head;

  while (temp !== null && temp.next !== null) {
    if (temp.val === temp.next.val) {
      temp.next = temp.next.next;
    } else {
      temp = temp.next;
    }
  }

  return head;
};
