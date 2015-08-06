<<<<<<< HEAD
// add tests to this file using the Nightwatch.js API
// http://nightwatchjs.org/api

module.exports = {
  "App Layout" : function (client) {
    client
      .url("http://localhost:3000")
      .waitForElementVisible("body", 1000)

      .verify.elementPresent('#navbarHeader')
      .verify.elementPresent('#navbarHeaderNav')
      .verify.elementPresent('#navbarBrandLink')

      .verify.elementPresent('#westPanel')
      .verify.elementPresent('#appLayout')
      .verify.elementPresent('#mainPanel')
      .verify.elementPresent('#navbarHeader')

      .verify.elementPresent('#navbarFooter')

      .end();
  }
};
=======
// add tests to this file using the Nightwatch.js API
// http://nightwatchjs.org/api

module.exports = {
  "App Layout" : function (client) {
    client
      .url("http://localhost:3000")
      .waitForElementVisible("body", 1000)

      .verify.elementPresent('#navbarHeader')
      .verify.elementPresent('#navbarHeaderNav')
      .verify.elementPresent('#navbarBrandLink')

      .verify.elementPresent('#westPanel')
      .verify.elementPresent('#appLayout')
      .verify.elementPresent('#mainPanel')
      .verify.elementPresent('#navbarHeader')

      .verify.elementPresent('#navbarFooter')

      .end();
  }
};
>>>>>>> 5618854daf14009ec2accbd7cab722fba5e35d52
