# Amortized analysis
- Normally when we analyze algorithm, we look into worst case of individual operations
- Sometime, looking at worst case may be too severe
- We may want to know total worst case for sequence of operations

# Resize Array Amortized analysis 
- We only resize every so often
- Many O(1) operations are followed by O(N) operation
- What is total cost of inserting many elements?
```
Amortized cost = Cost (n operation)/n 
```
# What is better choice to implement stack, Array or Linked list?
- For mission critical application, don't use dynamic resizable array
- Python `List` is underhood array.

# When to shrink array?
- Shrink when 25% of array is full
- In this case; drop the half 
- Still after dropping, half of array will still be empty
