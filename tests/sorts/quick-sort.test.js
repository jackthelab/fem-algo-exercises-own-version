/*
  Quick sort should grab a pivot from the end and then separate the list (not including the pivot)
  into two lists, smaller than the pivot and larger than the pivot. Call quickSort on both of those
  lists independently. Once those two lists come back sorted, concatenate the "left" (or smaller numbers)
  list, the pivot, and the "right" (or larger numbers) list and return that. The base case is when quickSort
  is called on a list with length less-than-or-equal-to 1. In the base case, just return the array given.
*/

function quickSort(nums) {
  // base case --> if nums.length < 2 already sorted, return as is
  if (nums.length < 2) return nums;

  // find the pivot -- traditional method here
  // make sure to remove from array too or else will break call stack -- think it's an infinite loop?
  const pivot = nums.pop();

  // arrays for smaller & larger items
  const less = [];
  const more = [];

  // sort each iterable value into less or more array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= pivot) {
      less.push(nums[i]);
    } else {
      more.push(nums[i]);
    }
  }

  // combine the quick sort of less and quick sort of more around pivot
  return quickSort(less).concat(pivot, quickSort(more));
}

describe('quick sort own solutions tests', () => {

  it("quickSort", function () {
    const input = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
    const answer = quickSort(input);

    expect(answer).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

});