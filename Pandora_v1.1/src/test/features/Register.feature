@run @registration
Feature: The purpose of the feature is to verify that the user can register on the site by giving
  name, mail and password. Also will validate negative cases.

  Scenario: Registration on the portal with valid values
    Given User is on Create account page
    When User register with name "Dimitris Alex" password "123456789" and mail "AlexD@example.com"
    Then User should successfully be registered


  Scenario: Registration on the portal with existing user email
    Given User is on Create account page
    When User register with name "Dimitris Alex" password "123456789" and existing mail "494alexd@example.com"
    Then User should not successfully be registered


  Scenario Outline: Registration on the portal with with invalid values
    Given User is on Create account page
    When User register with name "<name>" password "<password>" and existing mail "<email>"
    Then User should not successfully be registered
    Examples:
      | name          | password  |email|
      | Dimitris Alex | 123456789 |      |
      | Dimitris Alex |           |494alexd@example.com|
      |               | 123456789 |494alexd@example.com|

    Scenario: From Registration page user is going to login page
      Given User is on Create account page
      When User is selecting Login button
      Then Is successfully redirected on Login page