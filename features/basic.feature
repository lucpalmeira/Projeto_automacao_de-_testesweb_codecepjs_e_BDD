Feature: Login Page
  Me as a customer
  I want to access my account
  For me to go shopping

  Scenario: correct email and password
    Given that I'm on the site's login page
    When I fill the email field with "joaojose@gmail.com"  
    And I fill the password field with "123456"
    And I click login
    Then I see "joao jose"

  Scenario: wrong email and correct password
    Given that I'm on the site's login page
    When I fill the email field with "joaojosee@gmail.com"  
    And I fill the password field with "123456"
    And I click login
    Then I see "Your email or password is incorrect!"

