/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers
  You'll need to write more than just one function
*/

function merge(arr1, arr2) {
  // count indexes separately -- compare current indexes
  // if either index is greater than arr.length, concat rest of other array.
  let i = 0;
  let j = 0;

  const merged = new Array();

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  if (i === arr1.length) return merged.concat(arr2.slice(j));
  if (j === arr2.length) return merged.concat(arr1.slice(i));

}

const mergeSort = (nums) => {

  // if nums.length === 1 already sorted...
  if (nums.length <= 1) return nums;

  // merge can handle 2 sorted arrays...
  // which means I need to make everything into 2 sorted arrays
  // which means I need everything split in two until everything is for sure sorted... i.e. len = 1

  // split anything length > 1 in half
  const midIndex = Math.floor(nums.length / 2);
  const left = nums.slice(0, midIndex);
  const right = nums.slice(midIndex);
  
  // if we run mergeSort(left) it will split all the way down into arrays of length 1 then combine those into a single index so length == 1;
  return merge(mergeSort(left), mergeSort(right));

};

describe('merge sort own solutions test', () => {

  it('should merge correctly', () => {
    const nums1 = [1, 3, 5, 7, 9];
    const nums2 = [2, 4, 6, 8, 10];
    const nums3 = [3, 6, 7, 8, 11, 18];
    expect(merge(nums1, nums2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(merge(nums1, nums3)).toEqual([1, 3, 3, 5, 6, 7, 7, 8, 9, 11, 18]);
    expect(merge(nums3, nums2)).toEqual([2, 3, 4, 6, 6, 7, 8, 8, 10, 11, 18]);
  })

  it("merge sort", function () {
    const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
    const ans = mergeSort(nums);
    expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  })

});