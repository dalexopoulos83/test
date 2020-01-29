$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LogIn.feature");
formatter.feature({
  "line": 2,
  "name": "Portal login",
  "description": "",
  "id": "portal-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    },
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.before({
  "duration": 11072590143,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#login to ZUP"
    },
    {
      "line": 5,
      "value": "#  Scenario Outline: Login to portal with wrong un and psw"
    },
    {
      "line": 6,
      "value": "#    Given I\u0027m on portal login page"
    },
    {
      "line": 7,
      "value": "#    When I\u0027m giving wrong \"\u003cusername\u003e\" \"\u003cpassword\u003e\""
    },
    {
      "line": 8,
      "value": "#    Then I have to take an error \"\u003cmessage\u003e\""
    },
    {
      "line": 9,
      "value": "#    Examples:"
    },
    {
      "line": 10,
      "value": "#      | username         | password |message|"
    },
    {
      "line": 11,
      "value": "#      | dummys@mymail.com | abSD12!$ |Username or Password is wrong. Please try again.|"
    },
    {
      "line": 12,
      "value": "#      | dummy@mymail.com | 0000     |Wrong Password|"
    },
    {
      "line": 13,
      "value": "#      | admin@test.com   | abSD12!$ |Wrong Password|"
    },
    {
      "line": 14,
      "value": "#      |                  |          |Username is required|"
    }
  ],
  "line": 17,
  "name": "Login to portal with correct un, psw",
  "description": "",
  "id": "portal-login;login-to-portal-with-correct-un,-psw",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I\u0027m on portal login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LogIn.i_m_on_portal_login_page()"
});
formatter.result({
  "duration": 1168886949,
  "status": "passed"
});
formatter.after({
  "duration": 20519,
  "status": "passed"
});
formatter.uri("Register.feature");
formatter.feature({
  "line": 2,
  "name": "The purpose of the feature is to verify that the user can register on the site by giving",
  "description": "name, mail and password. Also will validate negative cases.",
  "id": "the-purpose-of-the-feature-is-to-verify-that-the-user-can-register-on-the-site-by-giving",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    },
    {
      "line": 1,
      "name": "@registration"
    }
  ]
});
formatter.before({
  "duration": 5114399841,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Registration on the portal with valid values",
  "description": "",
  "id": "the-purpose-of-the-feature-is-to-verify-that-the-user-can-register-on-the-site-by-giving;registration-on-the-portal-with-valid-values",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User is on Create account page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User register with name \"Dimitris Alex\" password \"123456789\" and mail \"AlexD@example.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should successfully be registered",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_is_on_Create_account_page()"
});
formatter.result({
  "duration": 359588,
  "error_message": "java.lang.NullPointerException\r\n\tat bindings.Registration.user_is_on_Create_account_page(Registration.java:18)\r\n\tat ✽.Given User is on Create account page(Register.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dimitris Alex",
      "offset": 25
    },
    {
      "val": "123456789",
      "offset": 50
    },
    {
      "val": "AlexD@example.com",
      "offset": 71
    }
  ],
  "location": "Registration.user_register_with_name_password_and_mail(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Registration.user_should_successfully_be_registered()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 16415,
  "status": "passed"
});
});