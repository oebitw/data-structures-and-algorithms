'use strict';

function zipLists (list1, list2) {

  // handling Edge cases
  if (!list1.head && !list2.head) {
    return 'Error: Both lists are Empty';
  } else if (list1.head && !list2.head) {
    return list1.head;
  } else if (!list1.head && list2.head) {
    return list2.head;
  }

  // zipping lists
  let counter = 0;
  let newHead = list1.head;
  let current = list1.head;
  let curLL1 = current.next;
  let curLL2 = list2.head;
  while (curLL1 || curLL2) {
    if (counter % 2 === 0) {
      counter++;
      if (!curLL2) {
        continue;
      }
      current.next = curLL2;
      current = current.next;
      curLL2 = curLL2.next;
    } else {
      counter++;
      if (!curLL1) {
        continue;
      }
      current.next = curLL1;
      current = current.next;
      curLL1 = curLL1.next;
    }
  }
  return newHead;
}



module.exports = zipLists;


