# Insertion Sort

Insertion Sort is a sorting algorithm that traverses the array multiple times as it slowly builds out the sorting sequence. The traversal keeps track of the minimum value and places it in the front of the array which should be incrementally sorted.

## Pseudocode

```html
  InsertionSort(int[] arr)
  
    FOR i = 1 to arr.length
    
      int j <-- i - 1
      int temp <-- arr[i]
      
      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1
        
      arr[j + 1] <-- temp
```

## Trace

Sample array: [8,4,23,42,16,15]

### Phase one:

1) evaluate if there is a smaller number in the array than what is currently present in index 0.
2) find this smaller number right away in index 1. The minimum value gets updated to remember this index.
3) At the end of the evaluation, the smaller number will be swapped with the current value in index i.

4) This results in the smallest number of the array being placed first.


### Pass two:

1) evaluate the remaining values in the array to see if there is a smaller value other than the current position of i.
2) `8` is the 2nd smallest number in the array, so it “swaps” with itself.

3) The minimum value does not change at all during the iteration of this pass.

### Pass Three:

1) evaluate the remaining indexes in the array, starting at position 2.
 
2) Both position 4 and 5 are smaller than the value in position 2. 

3) Each time a smaller number than the current minimum is found, the variable will update to the new smallest number.

4) In this case, 15 is the next smallest number. As a result, it will swap with position 2.

### Phase four:

through on the array proves that 16 is the next smallest number in the array, and as a result, switches places with the 42.

### Phase five:

the array only has one other index to evaluate. Since the last index value is larger than index 4, the two values will swap.

### Phase six

On its final iteratation through the array, it will swap places with itself as it evaluates the value against itself.

After this iteration, i will increment to 6, forcing it to break out of the outer for loop and leaving our array now sorted.

## Efficiency

- Time: O(n^2)

The basic operation of this algorithm is comparison. This will happen n * (n-1) number of times…concluding the algorithm to be n squared.

- Space: O(1)

No additional space is being created. This array is being sorted in place…keeping the space at constant O(1).