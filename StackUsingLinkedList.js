class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.head = null;
    }
    push(val){
        const node = new Node(val);
        if(!this.head) {
            this.head = node;
        } else {
            // Add at head
            node.next = this.head;
            this.head = node;
        }
    }
    pop(){
        if(!this.head) {
            return null;
        }
        const val = this.head.val;
        this.head = this.head.next;
        return val;
    }
}

const test = ()=> {
    const stack = new Stack();
    for(let i=0; i < 5; i++) {
        stack.push(i);
    }
    console.log({stack})
    for(let i=0; i < 5; i++) {
        const val = stack.pop();
        console.log(val);
    }
    console.log({stack})
}
test();