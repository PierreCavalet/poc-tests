const chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
const expect = chai.expect;

const calc = require("../../services/calc");

describe("Calc", function() {
  // sum
  describe("# sum()", function() {
    it("should return 3 with paramaters 1 and 2", function() {
      const result = calc.sum(1, 2);
      expect(result).to.equal(3);
    });

    it("should throw an error without parameter", function() {
      expect(calc.sum).to.throws();
    });

    it("should throw an error with string parameter", function() {
      expect(() => calc.sum("1", 2)).to.throws();
    });
  });

  // asynchronous sum
  describe("# asynchronousSum()", function() {
    it("should return 3 with paramaters 1 and 2", function() {
      return expect(calc.asynchronousSum(1, 2)).to.eventually.equal(3);
    });

    it("should return 3 with paramaters 1 and 2", function() {
      return expect(calc.asynchronousSum()).to.be.rejected;
    });

    it("should throw an error with string parameter", function() {
      return expect(calc.asynchronousSum("1", 2)).to.be.rejected;
    });
  });
});
