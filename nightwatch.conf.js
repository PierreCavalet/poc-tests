const browserstackUser = process.env.BROWSERSTACK_USER || ''
const browserstackKey = process.env.BROWSERSTACK_KEY || ''

module.exports = (function (settings) {
  settings.test_settings.browserstack.desiredCapabilities['browserstack.user'] = browserstackUser;
  settings.test_settings.browserstack.desiredCapabilities['browserstack.key'] = browserstackKey;
  return settings;
})(require('./nightwatch.json'));