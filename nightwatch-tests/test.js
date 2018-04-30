module.exports = {
  "Old school form": function(browser) {
    browser
      .url(browser.launchUrl + "/form")
      .waitForElementVisible("body", 1000)
      .setValue("input[name=input1]", 3)
      .setValue("input[name=input2]", 2)
      .click("input[type=submit]")
      .pause(1000)
      .assert.containsText("#result", 5)
      .end();
  }
};
