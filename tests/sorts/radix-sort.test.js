/*
  Implement a radix sort in a function called radixSort.
  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.
*/

function getDigit(num, place) {
  const numArr = num.toString().split('');
  if (place >= numArr.length) return 0;
  return parseInt(numArr[numArr.length - 1 - place], 10);
}

function getLongestNumber(nums) {
  const max = Math.max(...nums);
  const maxString = max.toString();
  return maxString.length;
}

function radixSort(array) {
  if (array.length < 2) return array;
  // find longest number
  const maxLength = getLongestNumber(array);

  // put into bucket for each digit -- use getDigit and work backwards
  const buckets = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [] };

  for (let k = 0; k < maxLength; k++) {
    // add num to appropriate bucket based on digit, place
    while(array.length) {
      const currentNum = array.shift();
      buckets[getDigit(currentNum, k)].push(currentNum);
    }

    // add each bucket of buckets back to sortedArray
    for (const bucket in buckets) {
      array = [...array, ...buckets[bucket]]
      // reset bucket to empty array for next k value
      buckets[bucket] = [];
    }
  
  }

  return array;
  
}

describe("radix sort", () => {

  it('getDigit should return the correct digit from a number', () => {

    expect(getDigit(3, 2, 3)).toEqual(0);
    expect(getDigit(1324, 3, 4)).toEqual(1);
    expect(getDigit(23, 0, 3)).toEqual(3);

  });

  it('runs getLongestNumber correctly', () => {

    const nums = [12, 1, 232, 1564, 2, 22, 325, 3];
    const nums2 = [132, 35, 53, 7, 8, 18];

    expect(getLongestNumber(nums)).toEqual(4);
    expect(getLongestNumber(nums2)).toEqual(3);

  });

  it("should sort correctly", () => {
    const nums = [
      20,
      51,
      3,
      801,
      415,
      62,
      4,
      17,
      19,
      11,
      1,
      100,
      1244,
      104,
      944,
      854,
      34,
      3000,
      3001,
      1200,
      633
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1,
      3,
      4,
      11,
      17,
      19,
      20,
      34,
      51,
      62,
      100,
      104,
      415,
      633,
      801,
      854,
      944,
      1200,
      1244,
      3000,
      3001
    ]);
  });

  it("should sort 99 random numbers correctly", () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const numsCopy = nums.slice();
    const ans = radixSort(nums);
    expect(ans).toEqual(numsCopy.sort((a, b) => a - b));
  });

});