module.exports = function() {

  var helper = this;

  this.Given(/^I am signed out$/, function(callback) {
    helper.world.browser.
    url(helper.world.mirrorUrl + "sign-out").
      // waitForExist('.account-link', 1000).
      // waitForVisible('.account-link', 1000).
    call(callback);
  });

  this.Given(/^I am on the home page$/, function(callback) {
    helper.world.browser.
    url(helper.world.mirrorUrl).
    call(callback);
  });

  this.When(/^I click on sign in link$/, function(callback) {
    helper.world.browser.
      // saveScreenshot(process.env.PWD + '/auth1.png').
      // waitForExist('.sign-up', 7000).
      // waitForVisible('.sign-up').
      // click('.sign-up').
    call(callback);
  });

  this.When(/^I enter my authentication information$/, function(callback) {
    helper.world.browser.
      // setValue('input#at-field-username_and_email', 'joshowens').
      // setValue('input#at-field-password', 'good password').
      // submitForm('#at-pwd-form').
    call(callback);
  });

  this.When(/^I enter incorrect authentication information$/,
    function(callback) {
      helper.world.browser.
        //setValue('input#at-field-username_and_email', 'invalidname').
        //setValue('input#at-field-password', 'invalidpassword').
        //submitForm('#at-pwd-form').
      call(callback);
    }
  );

  this.Then(/^I should be logged in$/, function(callback) {
    helper.world.browser.
      // waitForExist('.user-menu', 7000).
      // waitForVisible('.user-menu').
      /* getText('.user-menu .dropdown-top-level', function(err, username) {
        assert.equal(username[0], 'Josh Owens');
      }). */
    call(callback);
  });

  this.Then(/^I should see a user not found error$/, function(callback) {
    helper.world.browser.
      // waitForExist('.at-error', 5000).
      // waitForVisible('.at-error').
      /* getText('.at-error', function(err, errorMessage) {
        assert.equal(errorMessage, 'Login forbidden');
      }). */
    call(callback);
  });

};
