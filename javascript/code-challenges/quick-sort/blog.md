# Merge Sort

Merge Sort is a sorting algorithm that is based off of dividing the array into smaller arrays till the size becomes 1. Once the size becomes 1, the merge processes come into action and start merging arrays back using a helper function till the complete array is merged.

## Pseudocode

```html
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp
```

## Trace

// input : Array

// Output: Sorted Array


Call Quick sort, passing the array and left-pointer and right-pointer to the quickSort function.

For the first call, left-pointer would be the index of the first element which is 0 and right-pointer would be the index of the last element which would be (length -1).


Select Pivot, as the last index of the array. The key process in quickSort is partition(). Target of partitions is, given an array and an element x of array as pivot, put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x. 

All this should be done in linear time.


Swap function: A helper function to swap values of the array.


Call Partition function: After calculating the pivot, we send the pivot to the partitionHoare() function. This function moves all the items smaller than the pivot value to the left and larger than pivot value to the right with the swap function. Then the function updates and returns the value of the left-pointer, which is indeed used as the partitionIndex.


partitionIndex: In the partitionHoare() function, we keep moving all the items smaller than the pivot value to the left and larger than pivot value to the right. We have to keep track of the position of the partition. so that we can split the array into two parts in the next step.

This tracking of the index where we partition the array is done by using partitionIndex variable. the initial value is left-pointer. And this initial value gets updated by the partitionHoare() function
Inside the partitionHoare() function, we swap values for misplaced elements. That is, if an element is larger than the pivot position element, but is placed on the left side of the pivot, we swap it.


Repeat the process: Now come back to quickSort function. when I get the updated partitionIndex, apply quickSort for the left side of the array and right side of the array. keep doing it until left is smaller than right.


So, after the first 2 segments (segmented by pivot) are scanned with the partitionHoare() function, the next two segments that the main algorithm recurs on are [left…pivot - 1] and [pivot…right]

---

Sample array: [8,4,23,42,16,15]


- **STEP 1:** Set pivot to be the middle element. So, 23 will be the pivot element.

- **STEP 2:** let the left pointer to be the 0 index and the right pointer to be the last index (5th index)

- **STEP 3:** Compare the left pointer with the pivot element. Since, 8 < 23 shift left pointer to the right to 4 at index 1.

- **STEP 4:** Now,  4 < 23 so shift left pointer to one more index to the right. 
now 23 = 23 stop incrementing the left pointer and now left pointer is at index 2.

- **STEP 5:** compare value at the right pointer with the pivot element. 
15  < 23 stop moving the right pointer.

- **STEP 6:** Swap both values present at left and right pointers with each other.

- **STEP 7:** Move both pointers one more step.

- **STEP 8:**  16 <15, So Swap both values present at left and right pointers with each other. move pointers to one more step and stop as left pointer crosses the right pointer and return the index of the left pointer.

![](./img/visual.jpg)

## Efficiency

- Time: O(n log n)
- Space: O(n log n)
 
