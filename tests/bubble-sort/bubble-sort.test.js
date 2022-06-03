const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function bubblesort(nums) {
  // check if swapped in last iteration
  let swapped;

  // last index
  let finalIndex = nums.length - 1;

  // sort through nums array -- only repeat if a swap occured
  do {
    swapped = false; // set swapped to false since we haven't swapped yet in this round
    for (let i = 0; i < finalIndex; i++) {
      const x = nums[i];
      const y = nums[i + 1];

      if(x > y) {
        [nums[i], nums[i+1]] = [y, x]; // swap
        swapped = true; // show swap happened in this round -- would like to do this only once;
      }
    }
    finalIndex--; // remove last items since already sorted
  } while (swapped);

  return nums;
}

describe('bubble sort tests', () => {
  it('should sort nums correctly', () => {
    const sortedNums = bubblesort(nums);
    expect(sortedNums).toEqual(expectedSort);
  })
});