function moveZerosToEnd(nums) {
  let nonZeroPointer = 0; // Pointer to track the position for next non-zero element

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // If the current element is non-zero, move it to the next non-zero position
      nums[nonZeroPointer] = nums[i];
      nonZeroPointer++;
    }
  }

  // Fill the remaining positions with zeros
  for (let i = nonZeroPointer; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
}
