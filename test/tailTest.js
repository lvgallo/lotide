const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
    it("returns [] for ['5']", () => {
      assert.deepEqual(tail(['5']), []); 
  })
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []); 
  })
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  })
  it("returns ['Lighthouse','Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ['Lighthouse','Labs]);
  });
});

/*
  const tail = require('../tail');
  const assertEqual = require('../assertEqual');
  
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  tail(words); // no need to capture the return value since we are not checking it
  assertEqual(words.length,3); // original array should still have 3 elements!
  */