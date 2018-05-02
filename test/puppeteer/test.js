const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;

describe("puppeteer", function() {
  describe("add", function() {
    it("should print 5", async function() {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto("http://localhost:3000/form");
      await page.waitFor("input[name=input1]");
      await page.click("input[name=input1]");
      await page.keyboard.type("2");
      await page.click("input[name=input2]");
      await page.keyboard.type("3");
      await page.click("input[type=submit]");
      await page.waitFor("#result");
      const result = await page.evaluate(
        () => document.querySelector("#result").textContent
      );
      expect(result).to.eql("5");
      await page.close();
      await browser.close();
    });
  });
});
