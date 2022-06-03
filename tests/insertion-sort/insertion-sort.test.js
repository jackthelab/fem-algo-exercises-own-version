/*
  Insertion sort!
  
  Be sure to call your function insertionSort!
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.  
*/

function insertionSort(nums) {
  if (nums.length <= 1) return nums;

  // loop 'forward' from starting lastSortedIndex + 1
  for (let i = 1; i < nums.length; i++) {
    // if nums[i] is > nums[i-1] consider sorted -- do nothing -- otherwise...
    if (nums[i] < nums[i - 1]) {
      // swap nums[i] and nums[i-1]
      const a = nums[i];
      const b = nums[i - 1];
      [nums[i - 1], nums[i]] = [a, b]
      // swap backwards until at beginning of array or nums[i - 1] is bigger than nums[i - n]
      for (let j = i - 1; j > 0 && nums[j] < nums[j - 1]; j--) {
        const c = nums[j];
        const d = nums[j - 1];
        [nums[j], nums[j - 1]] = [d, c];
      }
    }
  }

  return nums;
}

describe('insertion sort own solutions tests', () => {

  it("insertion sort", function () {
    const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
    insertionSort(nums);
    expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

});