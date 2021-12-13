//Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

class SLL {
      addFront(value) {
        node = new Node()
        if (this.head === null) {
            this.head = node;
        } else {

            var current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }

    }
    
}
//Write a method to remove the head node and return the new list head node. If the list is empty, return null.

class SLL {
    removeFront() {
        if ((this.head === null)) {
            return null
        } else {
            this.head = this.head.next;
            return this
        }
    }
}

//Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.
class SLL {
    
}

 

 