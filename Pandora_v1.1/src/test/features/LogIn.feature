@run @login
Feature: The purpose of the feature it to verify that portal login is working based on the acceptance criteria

  Scenario Outline: Login to the portal with wrong un, psw
    Given User is on Login Page
    When User is logging in with credentials, email "<email>" and password "<password>"
    Then User now should not logged in on Calc
    Examples:
      | email         | password |
      | 495alexd@example.com | 1234567 |
      | 495alexd@example.com |         |
      |                      | 123456789 |
      | 495alexd@example.gr  | 123456789 |


  Scenario: Login to the portal with correct un, psw
    Given User is on Login Page
    When User is logging in with correct credentials, email "495alexd@example.com" and password "123456789"
    Then User now is logged in on Calc

  Scenario: Login and Logout to the portal with correct un, psw
    Given User is on Login Page
    When User is logging in with correct credentials, email "495alexd@example.com" and password "123456789"
    Then User now is logged in on Calc
    And User is logging out from Calc page
    And User is on Login Page
    And User is logging in with correct credentials, email "495alexd@example.com" and password "123456789"
    Then User now is logged in on Calc