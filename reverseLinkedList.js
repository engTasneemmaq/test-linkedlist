"use strict";

const linkedList = require("./linkedList");

function reverseList(head) {
  let current=head;
  let prev = null;
  while(current){
    let holdNext =current.next;
    current.next=prev;
    prev=current;
    current=holdNext;
  }
  return prev;
}

    module.exports = reverseList;

console.log( reverseList(linkedList));
// function reverseList(list) {
//     let current = list.head;
//     let newLl = new LinkedList();
//     while (current) {
//         newLl.insert(current.value);
//         current = current.next;
//     }
//     return newLl;
// }