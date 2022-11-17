const common_capabilities = {
  'buildName': 'browserstack-build-1',
  'userName': '${BROWSERSTACK_USERNAME}',
  'accessKey': '${BROWSERSTACK_ACCESS_KEY}',
  'debug': true
};
module.exports = {
  test_settings: {
    default: {},
    env1: {
      desiredCapabilities: {
        "browserName": "Chrome",
        "bstack:options" : {
          "browserVersion": "103.0",
          "os": "Windows",
          "osVersion": "11",
          ...common_capabilities
        }
      }
    }
  }
};
