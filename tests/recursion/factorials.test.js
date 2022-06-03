/*
  Make a function that computes a factorial recursively.
  A factorial is when you take a number n and multiply by each preceding integer until you hit one.
  n * (n-1) * (n-2) ... * 3 * 2 * 1
  
  Call the function factorial
  
  factorial(1) = 1
  factorial(2) = 2
  factorial(3) = 6 
*/

/* had to look at resources for this solution */
function factorial(n) { 
  
  if (n > 1) return n * factorial(n - 1);
  // 5 * factorial(4)           // 5 * 24 = 120
  // // 4 * factorial(3)        // 4 * 6 = 24
  // // // 3 * factorial(2)     // 3 * 2 = 6
  // // // // 2 * factorial(1)  // 2 * 1 = 2
  // // // // // 1              // 1 = 1
  return 1;

  // not recursively but better?
  // for (let i = n - 1; i > 1; i--) {
  //   factValue *= i;
  // }

}

describe('my factorials recursion solutions tests', () => {
  it("factorials", () => {
    expect(factorial(1)).toEqual(1);
    expect(factorial(2)).toEqual(2);
    expect(factorial(3)).toEqual(6);
    expect(factorial(10)).toEqual(3628800);
  });
});