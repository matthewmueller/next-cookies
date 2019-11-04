module.exports = {
  // beforeEach : function(browser) {
  //   browser
  //   .url('http://localhost:3000/')
  //   .deleteCookies()
  //   .end();
  // },

  "No cookies, server-side": function(browser) {
    browser
      .url("http://localhost:3000/cookies")
      .waitForElementVisible("h1")
      .assert.containsText("h1", "Cookies")
      .assert.elementNotPresent("li")
      .end();
  },

  "No cookies, client-side": function(browser) {
    browser
      .url("http://localhost:3000/")
      .waitForElementVisible("a")
      .click("a")
      .waitForElementVisible("h1")
      .assert.containsText("h1", "Cookies")
      .assert.elementNotPresent("li")
      .end();
  },

  "With a cookie, server-side": function(browser) {
    browser
      .url("http://localhost:3000/")
      .setCookie({ name: "test_cookie", value: "test value" })
      .url("http://localhost:3000/cookies")
      .waitForElementVisible("h1")
      .assert.containsText("h1", "Cookies")
      .assert.elementPresent("li")
      .assert.containsText("li", "test_cookie")
      .assert.containsText("li", "test value")
      .end();
  },

  "With a cookie, client-side": function(browser) {
    browser
      .url("http://localhost:3000/")
      .setCookie({ name: "test_cookie", value: "test value" })
      .waitForElementVisible("a")
      .click("a")
      .waitForElementVisible("h1")
      .assert.containsText("h1", "Cookies")
      .assert.elementPresent("li")
      .assert.containsText("li", "test_cookie")
      .assert.containsText("li", "test value")
      .end();
  }
};
