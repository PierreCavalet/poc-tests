const chai = require("chai");
const sinon = require("sinon");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
const expect = chai.expect;

const sayHi = require("../../services/sayHi");
const userRepository = require("../../services/userRepository");

describe("sayHi", function() {
  // sayHi
  describe("# sayHi()", function() {
    it("should say Hi Pierre", async function() {
      sinon.stub(userRepository, "getUser").returns({ name: "Pierre" });

      const result = await sayHi.sayHi("user1");
      expect(result).to.equal("Hi Pierre");
    });
  });
});
