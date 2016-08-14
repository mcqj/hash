var hash = require("./");
var assert = require("assert");

describe('hash', function() {
  let testData = [
    { str: 'The quick brown fox jumped over the lazy dog', expected: 2098182776 },
    { str: 'Hello, world!', expected:  343662184 }
  ];

  it(`should hash "${testData[0].str}" to ${testData[0].expected}`, function() {
    assert.equal(hash(testData[0].str), testData[0].expected);
  })

  it(`should hash ${testData[1].str} to ${testData[1].expected}`, function() {
    assert.equal(hash(testData[1].str), testData[1].expected);
  })
})
