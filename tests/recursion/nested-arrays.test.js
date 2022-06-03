/* 
  write a function that accepts an array that only contains
  two types of things: numbers and arrays. those nested arrays
  also only contain numbers and other, nested arrays.
  example: nestedAdd([1, 2, [3]]) = 6
           nestedAdd([[[2]], 1, [1, 3]]) = 7
 
 */

function nestedAdd(array) {
  let runningSum = 0;
  for (let i = 0; i < array.length; i++) {
    // can use .length because we know it's either number or array
    // wouldn't work with strings, objects (possibly) so should look for Array in that situation
    // instructor used Array.isArray(array[i]) instead -- otherwise the same solution
    if (array[i].length) {
      runningSum += nestedAdd(array[i]);
    } else {
      runningSum += array[i];
    }
  }

  return runningSum;
}

describe('my nested arrays recursion solution tests', () => {
  it("nested arrays addition", () => {
    expect(nestedAdd([1, 2, 3])).toEqual(6);
    expect(nestedAdd([1, [2], 3])).toEqual(6);
    expect(nestedAdd([[[[[[[[[5]]]]]]]]])).toEqual(5);
    expect(nestedAdd([10, [12, 14, [1], [16, [20]]], 10, 11])).toEqual(94);
  })
});