const { I } = inject();

Given("that I'm on the site's login page", () => {
  I.amOnPage("/");
  I.click("Signup / Login");
  I.waitForElement(
    "#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=email]:nth-child(2)",
    10
  );
});

When("I fill the email field with {string}", (email) => {
  I.fillField(
    "#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=email]:nth-child(2)",
    email
  );
});

When("I fill the password field with {string}", (password) => {
  I.fillField("password", secret(password));
});

When("I click login", () => {
  I.click("Login");
});

Then("I see {string}", (message) => {
  I.see(message);
});
