const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// OWN Solution #1
function bubblesortOne(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let a = nums[i];
    let b = nums[i + 1];

    if (a > b) {
      [nums[i], nums[i + 1]] = [b, a];
      for (let n = i - 1; n >= 0; n--) {
        if (nums[n] <= nums[n + 1]) break;
        let c = nums[n];
        let d = nums[n + 1];
        [nums[n], nums[n + 1]] = [d, c];
      }
    }
  }
  return nums;
}

test('bubble sort one', () => {
  const sortedNums = bubblesortOne(nums);
  expect(sortedNums).toEqual(expectedSort);
});

// OWN Solution #2
function bubblesortTwo(nums) {
  for (let i = 0; i < nums.length; i++) {
    let a;
    let b;

    if (nums[i + 1] && nums[i] > nums[i + 1]) {
      // move right
      for (let n = i; n < nums.length - 1; n++) {
        if (nums[n] <= nums[n + 1]) break;
        [a, b] = [nums[n], nums[n + 1]];
        [nums[n], nums[n + 1]] = [b, a];
      }
    }
    if (nums[i - 1] && nums[i] < nums[i - 1]) {
      // move left
      for (let n = i; n > 0; n--) {
        if (nums[n] >= nums[n - 1]) break;
        [a, b] = [nums[n - 1], nums[n]];
        [nums[n - 1], nums[n]] = [b, a];
      }
    }
  }
  return nums;
}

test('bubble sort two', () => {
  const sortedNums = bubblesortTwo(nums);
  expect(sortedNums).toEqual(expectedSort);
});