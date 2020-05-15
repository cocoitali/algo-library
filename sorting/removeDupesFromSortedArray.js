// leetcode
// Given a sorted array nums, remove the duplicates in-place 
// such that each element appear only once and return the new length.

// Do not allocate extra space for another array, 
// you must do this by modifying the input array in-place with O(1) extra memory.


const removeDuplicates = function(nums) {
    if (nums === null) {
        return 0;
    }
//we have two pointers
//1. where to insert 
//2. where we are iterating in the array 
let pointer1 = 0
let prev = null
// let pointer2 = 1 (only neccessary if a while loop is used)

//loop through array
for (let pointer2 = 0; pointer2 < nums.length; pointer2++) {
// while (pointer2 < nums.length) { ( another option is to use a while loop)
    //compare current item with prev item
    // nums[i] ><= nums[i-1]
     //check if equal
        //if equal, ignore and move to next item
    //if not equal
        //replace value at pointer 1 with the current item
        //increment both pointers
    if (nums[pointer2] !== prev) {
        nums[pointer1] = nums[pointer2]
        pointer1++;
        prev = nums[pointer2];
    }
    
}

 return pointer1;   
   
};