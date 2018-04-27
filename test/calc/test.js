const assert = require("assert");
const calc = require("../../services/calc");

describe("Calc", function() {
  // sum
  describe("# sum()", function() {
    it("should return 3 with paramaters 1 and 2", function() {
      const result = calc.sum(1, 2);
      assert.equal(result, 3);
    });
  });

  // asynchronous sum
  describe("# asynchronousSum()", function() {
    it("should return 3 with paramaters 1 and 2", function(done) {
      calc
        .asynchronousSum(1, 2)
        .then(result => {
          assert.equal(result, 3);
          done();
        })
        .catch(err => {
          done(err);
        });
    });
  });
});
