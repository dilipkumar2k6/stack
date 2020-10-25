class FixedCapacityStackOfString {
  constructor(capacity) {
    this.s = new Array(capacity);
    this.pointer = -1;
    this.capacity = capacity;
  }
  isEmpty() {
    return this.pointer === -1;
  }
  resize(capacity) {
    // Create as per new size
    const arr = new Array(capacity);
    // copy old item to new array
    for (let i=0; i <= this.pointer; i++) {
      arr[i] = this.s[i];
    }
    // replace original arr
    this.s = arr;
    this.capacity = capacity;
  }
  push(item) {
    if (this.pointer >= this.capacity - 1) {
      this.resize(this.capacity * 2);
    }
    this.s[++this.pointer] = item;
  }
  pop() {
    if (this.counter === -1) {
      return null;
    }
    const isResizeNeeded = Math.floor(this.capacity/4) === this.pointer;
    if(isResizeNeeded) {
        this.resize(Math.floor(this.capacity/2))
    }
    const value = this.s[this.pointer];
    delete this.s[this.pointer];
    this.pointer--;
    return value;
  }
}

const test = () => {
  const stack = new FixedCapacityStackOfString(5);
  
  for(let i=0; i < 40; i++) {
    stack.push(i);  
  } 
  console.log({ stack });

  for(let i=0; i < 30; i++) {
    stack.pop(); 
  }
  console.log({ stack });
};
test();
