"use strict";

const Node = require("./node");

class linkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length =0;
    }
append (value){
    let newNode = new Node(value);
    // if linked list is empty add new node to head 
    if(!this.head){
        this.head= newNode;
        this.head.next=null;
        this.length ++;
    }
    // if linked list is not empty loop through linked list by while loop to add node at the tail 
    else{
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next
        }
        currentNode.next=newNode;
        newNode=null;
        this.length++;
        return this
    }
}

// to print linked list 
print (){
    let currentNode= this.head;
    while (currentNode != null) {
        console.log(currentNode.value);
        currentNode= currentNode.next;
    }
}

removeNode(value){
    let current=this.head;
    while (current) {
        if(current.value===value){
            current.value=current.next.value;
            current.next=current.next.next;
        }
        current=current.next;
    }
}

reverseList() {
        let current=this.head;
        let prev = null;
        while(current){
          let holdNext =current.next;
          current.next=prev;
          prev=current;
          current=holdNext;
        }
        console.log(prev);
        return prev;
      }

sumNode (){
    let sum =0;
    if(!this.head) return 0;
    let current=this.head;
    while (current) {
            if(typeof current.value=== "number"){
                sum= sum+current.value;
        }
        current=current.next;
    }
return sum;
    }


    sumOddNode (){
        let sum =0;
        if(!this.head) return 0;
        let current=this.head;
        while (current) {
                if(typeof current.value=== "number" && current.value %2 !=0){
                    sum= sum+current.value;
            }
            current=current.next;
        }
    return sum;
        }

        sumEvenNode (){
            let sum =0;
            if(!this.head) return 0;
            let current=this.head;
            while (current) {
                    if(typeof current.value=== "number" && current.value %2 ==0){
                        sum= sum+current.value;
                }
                current=current.next;
            }
        return sum;
            }
           
            maxNode (){
                if(!this.head) return 0;
                let current=this.head;
                let max_value=0 ;
                while (current) {
                        if(typeof current.value=== "number" && current.value > max_value ){
                            max_value=current.value;
                    }
                    current=current.next;
                }
            return max_value;
                }      

                minNode (){
                    if(!this.head) return 0;
                    let current=this.head;
                    let min_value=this.head.value ;
                    while (current) {
                            if(typeof current.value=== "number" && current.value <= min_value ){
                                min_value=current.value;
                        }
                        current=current.next;
                    }
                return min_value;
                    }    
}

module.exports = linkedList;

const ll = new linkedList ();

ll.append(5);
ll.append(8);
ll.append(10);
ll.append(11);
ll.append(1000);
// ll.print();
// ll.reverseList();
// ll.removeNode(8);
ll.print();
console.log(ll.sumNode());
console.log(ll.sumOddNode());
console.log(ll.sumEvenNode());
console.log(ll.maxNode());
console.log(ll.minNode());



