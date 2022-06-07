// for both exercises, the id of the object you're searching for is given to you
// as integer. return the whole object that you're looking for
//
// it's up to you what to return if the object isn't found (we're not testing that)

function linearSearch(id, array) {
  for (let item of array) {
    if (item.id === id) return item;
  }

  console.log(`no id: ${id} was found`);
}

// could also do recursively
function binarySearch(id, array) {
  // find midpoint
  let midIndex = Math.floor(array.length / 2);
  let current = array[midIndex];

  while (current.id !== id) {

    if (!array.length) return `no item matching id: ${id}`

    // could probably refactor steps below into single function -- seems unnecessary though
    if (current.id > id) {
      array = array.slice(0, midIndex);
      midIndex = Math.floor(array.length / 2);
      current = array[midIndex];
    } else {
      array = array.slice(midIndex + 1);
      midIndex = Math.floor(array.length / 2);
      current = array[midIndex];
    }

  }

  return current;
}

describe('search algorithms own solutions', () => {

  it("linear search", function () {
    const lookingFor = { id: 5, name: "Brian" };
    expect(
      linearSearch(5, [
        { id: 1, name: "Sam" },
        { id: 11, name: "Sarah" },
        { id: 21, name: "John" },
        { id: 10, name: "Burke" },
        { id: 13, name: "Simona" },
        { id: 31, name: "Asim" },
        { id: 6, name: "Niki" },
        { id: 19, name: "Aysegul" },
        { id: 25, name: "Kyle" },
        { id: 18, name: "Jem" },
        { id: 2, name: "Marc" },
        { id: 51, name: "Chris" },
        lookingFor,
        { id: 14, name: "Ben" }
      ])
    ).toBe(lookingFor);
  });

  it("binary search", function () {
    const lookingFor = { id: 23, name: "Brian" };
    expect(
      binarySearch(23, [
        { id: 1, name: "Sam" },
        { id: 3, name: "Sarah" },
        { id: 5, name: "John" },
        { id: 6, name: "Burke" },
        { id: 10, name: "Simona" },
        { id: 12, name: "Asim" },
        { id: 13, name: "Niki" },
        { id: 15, name: "Aysegul" },
        { id: 17, name: "Kyle" },
        { id: 18, name: "Jem" },
        { id: 19, name: "Marc" },
        { id: 21, name: "Chris" },
        lookingFor,
        { id: 24, name: "Ben" }
      ])
    ).toBe(lookingFor);
  });

});