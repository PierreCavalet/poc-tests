module.exports = {
  // beforeEach: function (browser, done) {
  //   require('nightwatch-video-recorder').start(browser, done)
  // },

  // afterEach: function (browser, done) {
  //   require('nightwatch-video-recorder').stop(browser, done)
  // },

  "Old school form": function (browser) {
    browser
      .url(browser.launchUrl + "/form")
      .waitForElementVisible("body", 1000)
      .setValue("input[name=input1]", 3)
      .setValue("input[name=input2]", 2)
      .saveScreenshot('./reports/form.png')
      .click("input[type=submit]")
      .pause(1000)
      .assert.containsText("#result", 5)
      .end();
  }
};