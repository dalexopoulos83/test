$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Edibles.feature");
formatter.feature({
  "line": 2,
  "name": "The purpose of the feature is to validate that the user can add, edit and delete entries on edibles. Also",
  "description": "we will cover the filtering and daily calories update.",
  "id": "the-purpose-of-the-feature-is-to-validate-that-the-user-can-add,-edit-and-delete-entries-on-edibles.-also",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    },
    {
      "line": 1,
      "name": "@edibles"
    }
  ]
});
formatter.before({
  "duration": 25609044491,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Edit calories on Profile",
  "description": "",
  "id": "the-purpose-of-the-feature-is-to-validate-that-the-user-can-add,-edit-and-delete-entries-on-edibles.-also;edit-calories-on-profile",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User is on Edibles page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User is going on Profile page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User is updating his calories on \"2500\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Edibles.user_is_on_Edibles_page()"
});
formatter.result({
  "duration": 1776587472,
  "status": "passed"
});
formatter.match({
  "location": "Edibles.user_is_going_on_Profile_page()"
});
formatter.result({
  "duration": 766440004,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2500",
      "offset": 34
    }
  ],
  "location": "Edibles.user_is_updating_his_calories_on(String)"
});
formatter.result({
  "duration": 330866315,
  "status": "passed"
});
formatter.after({
  "duration": 739373424,
  "status": "passed"
});
formatter.before({
  "duration": 4985956053,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User can add records on Edibles",
  "description": "",
  "id": "the-purpose-of-the-feature-is-to-validate-that-the-user-can-add,-edit-and-delete-entries-on-edibles.-also;user-can-add-records-on-edibles",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "User is on Edibles page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User is adding first record with name \"pizza\", \"1500\", date \"01012021\" and time \"0301 1\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User is adding a second entry with name \"pasta\", calories \"1400\", date \"01012020\" and time \"0400 1\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "New entry is present on app",
  "keyword": "Then "
});
formatter.match({
  "location": "Edibles.user_is_on_Edibles_page()"
});
formatter.result({
  "duration": 1716247950,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pizza",
      "offset": 39
    },
    {
      "val": "1500",
      "offset": 48
    },
    {
      "val": "01012021",
      "offset": 61
    },
    {
      "val": "0301 1",
      "offset": 81
    }
  ],
  "location": "Edibles.user_is_adding_first_record_with_name_date_and_time(String,String,String,String)"
});
formatter.result({
  "duration": 1375296750,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pasta",
      "offset": 41
    },
    {
      "val": "1400",
      "offset": 59
    },
    {
      "val": "01012020",
      "offset": 72
    },
    {
      "val": "0400 1",
      "offset": 92
    }
  ],
  "location": "Edibles.user_is_adding_a_second_entry_with_name_calories_date_and_time(String,String,String,String)"
});
formatter.result({
  "duration": 1213088088,
  "status": "passed"
});
formatter.match({
  "location": "Edibles.new_entry_is_present_on_app()"
});
formatter.result({
  "duration": 357219875,
  "status": "passed"
});
formatter.after({
  "duration": 715051717,
  "status": "passed"
});
formatter.before({
  "duration": 5348015237,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User can delete a record on Edibles",
  "description": "",
  "id": "the-purpose-of-the-feature-is-to-validate-that-the-user-can-add,-edit-and-delete-entries-on-edibles.-also;user-can-delete-a-record-on-edibles",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "User is on Edibles page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User is deleting the first entry",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Records should be updated",
  "keyword": "Then "
});
formatter.match({
  "location": "Edibles.user_is_on_Edibles_page()"
});
formatter.result({
  "duration": 1677703785,
  "status": "passed"
});
formatter.match({
  "location": "Edibles.user_is_deleting_the_first_entry()"
});
formatter.result({
  "duration": 828997585,
  "status": "passed"
});
formatter.match({
  "location": "Edibles.records_should_be_updated()"
});
formatter.result({
  "duration": 233144494,
  "status": "passed"
});
formatter.after({
  "duration": 759775054,
  "status": "passed"
});
formatter.before({
  "duration": 5192154001,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User can edit a record on Edibles",
  "description": "",
  "id": "the-purpose-of-the-feature-is-to-validate-that-the-user-can-add,-edit-and-delete-entries-on-edibles.-also;user-can-edit-a-record-on-edibles",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "User is on Edibles page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User is updating calories on the first entry to \"2000\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Thr entry is now updated",
  "keyword": "Then "
});
formatter.match({
  "location": "Edibles.user_is_on_Edibles_page()"
});
formatter.result({
  "duration": 1823305729,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 49
    }
  ],
  "location": "Edibles.user_is_updating_calories_on_the_first_entry_to(String)"
});
formatter.result({
  "duration": 925407755,
  "status": "passed"
});
formatter.match({
  "location": "Edibles.thr_entry_is_now_updated()"
});
formatter.result({
  "duration": 323887431,
  "status": "passed"
});
formatter.after({
  "duration": 711723090,
  "status": "passed"
});
formatter.before({
  "duration": 5252990071,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User can short records by date and time",
  "description": "",
  "id": "the-purpose-of-the-feature-is-to-validate-that-the-user-can-add,-edit-and-delete-entries-on-edibles.-also;user-can-short-records-by-date-and-time",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "User is on Edibles page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User is updating filter by date with the value \"001012021\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User is updating filter by time with start time \"02 01\" and end time \"05 01\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Only records on 2021 are present on edibles",
  "keyword": "Then "
});
formatter.match({
  "location": "Edibles.user_is_on_Edibles_page()"
});
formatter.result({
  "duration": 1613705287,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "001012021",
      "offset": 48
    }
  ],
  "location": "Edibles.user_is_updating_filter_by_date_with_the_value(String)"
});
formatter.result({
  "duration": 1037413079,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02 01",
      "offset": 49
    },
    {
      "val": "05 01",
      "offset": 70
    }
  ],
  "location": "Edibles.user_is_updating_filter_by_time_with_start_time_and_end_time(String,String)"
});
formatter.result({
  "duration": 375971812,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021",
      "offset": 16
    }
  ],
  "location": "Edibles.only_records_on_are_present_on_edibles(int)"
});
formatter.result({
  "duration": 196385446,
  "status": "passed"
});
formatter.after({
  "duration": 872502631,
  "status": "passed"
});
formatter.before({
  "duration": 5036924736,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Exceeded calories per day validation",
  "description": "",
  "id": "the-purpose-of-the-feature-is-to-validate-that-the-user-can-add,-edit-and-delete-entries-on-edibles.-also;exceeded-calories-per-day-validation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "User is on Edibles page",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User is adding a second entry with name \"salad\" and calories \"4000\"",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "A validation message displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "User decries daily calories",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Validation message is not displayed any more",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "User is deleting the first entry",
  "keyword": "And "
});
formatter.match({
  "location": "Edibles.user_is_on_Edibles_page()"
});
formatter.result({
  "duration": 1648909539,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "salad",
      "offset": 41
    },
    {
      "val": "4000",
      "offset": 62
    }
  ],
  "location": "Edibles.user_is_adding_a_second_entry_with_name_and_calories(String,String)"
});
formatter.result({
  "duration": 1128689498,
  "status": "passed"
});
formatter.match({
  "location": "Edibles.a_validation_message_displayed()"
});
formatter.result({
  "duration": 202148091,
  "status": "passed"
});
formatter.match({
  "location": "Edibles.user_decries_daily_calories()"
});
formatter.result({
  "duration": 131601085,
  "status": "passed"
});
formatter.match({
  "location": "Edibles.validation_message_is_not_displayed_any_more()"
});
formatter.result({
  "duration": 194000673,
  "status": "passed"
});
formatter.match({
  "location": "Edibles.user_is_deleting_the_first_entry()"
});
formatter.result({
  "duration": 138100348,
  "status": "passed"
});
formatter.after({
  "duration": 716152026,
  "status": "passed"
});
formatter.uri("LogIn.feature");
formatter.feature({
  "line": 2,
  "name": "The purpose of the feature it to verify that portal login is working based on the acceptance criteria",
  "description": "",
  "id": "the-purpose-of-the-feature-it-to-verify-that-portal-login-is-working-based-on-the-acceptance-criteria",
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
formatter.scenarioOutline({
  "line": 4,
  "name": "Login to the portal with wrong un, psw",
  "description": "",
  "id": "the-purpose-of-the-feature-it-to-verify-that-portal-login-is-working-based-on-the-acceptance-criteria;login-to-the-portal-with-wrong-un,-psw",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User is logging in with credentials, email \"\u003cemail\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User now should not logged in on Calc",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "the-purpose-of-the-feature-it-to-verify-that-portal-login-is-working-based-on-the-acceptance-criteria;login-to-the-portal-with-wrong-un,-psw;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 9,
      "id": "the-purpose-of-the-feature-it-to-verify-that-portal-login-is-working-based-on-the-acceptance-criteria;login-to-the-portal-with-wrong-un,-psw;;1"
    },
    {
      "cells": [
        "495alexd@example.com",
        "1234567"
      ],
      "line": 10,
      "id": "the-purpose-of-the-feature-it-to-verify-that-portal-login-is-working-based-on-the-acceptance-criteria;login-to-the-portal-with-wrong-un,-psw;;2"
    },
    {
      "cells": [
        "495alexd@example.com",
        ""
      ],
      "line": 11,
      "id": "the-purpose-of-the-feature-it-to-verify-that-portal-login-is-working-based-on-the-acceptance-criteria;login-to-the-portal-with-wrong-un,-psw;;3"
    },
    {
      "cells": [
        "",
        "123456789"
      ],
      "line": 12,
      "id": "the-purpose-of-the-feature-it-to-verify-that-portal-login-is-working-based-on-the-acceptance-criteria;login-to-the-portal-with-wrong-un,-psw;;4"
    },
    {
      "cells": [
        "495alexd@example.gr",
        "123456789"
      ],
      "line": 13,
      "id": "the-purpose-of-the-feature-it-to-verify-that-portal-login-is-working-based-on-the-acceptance-criteria;login-to-the-portal-with-wrong-un,-psw;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5710701777,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Login to the portal with wrong un, psw",
  "description": "",
  "id": "the-purpose-of-the-feature-it-to-verify-that-portal-login-is-working-based-on-the-acceptance-criteria;login-to-the-portal-with-wrong-un,-psw;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
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
formatter.step({
  "line": 5,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User is logging in with credentials, email \"495alexd@example.com\" and password \"1234567\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User now should not logged in on Calc",
  "keyword": "Then "
});
formatter.match({
  "location": "LogIn.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 1155381615,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "495alexd@example.com",
      "offset": 44
    },
    {
      "val": "1234567",
      "offset": 80
    }
  ],
  "location": "LogIn.user_is_logging_in_with_credentials_email_and_password(String,String)"
});
formatter.result({
  "duration": 498714511,
  "status": "passed"
});
formatter.match({
  "location": "LogIn.user_now_should_not_logged_in_on_Calc()"
});
formatter.result({
  "duration": 43469139,
  "status": "passed"
});
formatter.after({
  "duration": 722282467,
  "status": "passed"
});
formatter.before({
  "duration": 5338948587,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Login to the portal with wrong un, psw",
  "description": "",
  "id": "the-purpose-of-the-feature-it-to-verify-that-portal-login-is-working-based-on-the-acceptance-criteria;login-to-the-portal-with-wrong-un,-psw;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
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
formatter.step({
  "line": 5,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User is logging in with credentials, email \"495alexd@example.com\" and password \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User now should not logged in on Calc",
  "keyword": "Then "
});
formatter.match({
  "location": "LogIn.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 1152200721,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "495alexd@example.com",
      "offset": 44
    },
    {
      "val": "",
      "offset": 80
    }
  ],
  "location": "LogIn.user_is_logging_in_with_credentials_email_and_password(String,String)"
});
formatter.result({
  "duration": 603295695,
  "status": "passed"
});
formatter.match({
  "location": "LogIn.user_now_should_not_logged_in_on_Calc()"
});
formatter.result({
  "duration": 80479540,
  "status": "passed"
});
formatter.after({
  "duration": 730029772,
  "status": "passed"
});
formatter.before({
  "duration": 5343692997,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login to the portal with wrong un, psw",
  "description": "",
  "id": "the-purpose-of-the-feature-it-to-verify-that-portal-login-is-working-based-on-the-acceptance-criteria;login-to-the-portal-with-wrong-un,-psw;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
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
formatter.step({
  "line": 5,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User is logging in with credentials, email \"\" and password \"123456789\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User now should not logged in on Calc",
  "keyword": "Then "
});
formatter.match({
  "location": "LogIn.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 1171197855,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 44
    },
    {
      "val": "123456789",
      "offset": 60
    }
  ],
  "location": "LogIn.user_is_logging_in_with_credentials_email_and_password(String,String)"
});
formatter.result({
  "duration": 493645394,
  "status": "passed"
});
formatter.match({
  "location": "LogIn.user_now_should_not_logged_in_on_Calc()"
});
formatter.result({
  "duration": 65695385,
  "status": "passed"
});
formatter.after({
  "duration": 726215880,
  "status": "passed"
});
formatter.before({
  "duration": 5446142813,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login to the portal with wrong un, psw",
  "description": "",
  "id": "the-purpose-of-the-feature-it-to-verify-that-portal-login-is-working-based-on-the-acceptance-criteria;login-to-the-portal-with-wrong-un,-psw;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
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
formatter.step({
  "line": 5,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User is logging in with credentials, email \"495alexd@example.gr\" and password \"123456789\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User now should not logged in on Calc",
  "keyword": "Then "
});
formatter.match({
  "location": "LogIn.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 1155960239,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "495alexd@example.gr",
      "offset": 44
    },
    {
      "val": "123456789",
      "offset": 79
    }
  ],
  "location": "LogIn.user_is_logging_in_with_credentials_email_and_password(String,String)"
});
formatter.result({
  "duration": 518416457,
  "status": "passed"
});
formatter.match({
  "location": "LogIn.user_now_should_not_logged_in_on_Calc()"
});
formatter.result({
  "duration": 48049401,
  "status": "passed"
});
formatter.after({
  "duration": 721732056,
  "status": "passed"
});
formatter.before({
  "duration": 5480952596,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login to the portal with correct un, psw",
  "description": "",
  "id": "the-purpose-of-the-feature-it-to-verify-that-portal-login-is-working-based-on-the-acceptance-criteria;login-to-the-portal-with-correct-un,-psw",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User is logging in with correct credentials, email \"495alexd@example.com\" and password \"123456789\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User now is logged in on Calc",
  "keyword": "Then "
});
formatter.match({
  "location": "LogIn.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 1139728498,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "495alexd@example.com",
      "offset": 52
    },
    {
      "val": "123456789",
      "offset": 88
    }
  ],
  "location": "LogIn.user_is_logging_in_with_correct_credentials_email_and_password(String,String)"
});
formatter.result({
  "duration": 518629337,
  "status": "passed"
});
formatter.match({
  "location": "LogIn.user_now_is_logged_in_on_Calc()"
});
formatter.result({
  "duration": 540348775,
  "status": "passed"
});
formatter.after({
  "duration": 1081905069,
  "status": "passed"
});
formatter.before({
  "duration": 5257097892,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Login and Logout to the portal with correct un, psw",
  "description": "",
  "id": "the-purpose-of-the-feature-it-to-verify-that-portal-login-is-working-based-on-the-acceptance-criteria;login-and-logout-to-the-portal-with-correct-un,-psw",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User is logging in with correct credentials, email \"495alexd@example.com\" and password \"123456789\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User now is logged in on Calc",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User is logging out from Calc page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User is on Login Page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User is logging in with correct credentials, email \"495alexd@example.com\" and password \"123456789\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User now is logged in on Calc",
  "keyword": "Then "
});
formatter.match({
  "location": "LogIn.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 1162325105,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "495alexd@example.com",
      "offset": 52
    },
    {
      "val": "123456789",
      "offset": 88
    }
  ],
  "location": "LogIn.user_is_logging_in_with_correct_credentials_email_and_password(String,String)"
});
formatter.result({
  "duration": 554278843,
  "status": "passed"
});
formatter.match({
  "location": "LogIn.user_now_is_logged_in_on_Calc()"
});
formatter.result({
  "duration": 447274926,
  "status": "passed"
});
formatter.match({
  "location": "LogIn.user_is_logging_out_from_Calc_page()"
});
formatter.result({
  "duration": 159102661,
  "status": "passed"
});
formatter.match({
  "location": "LogIn.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 124807381,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "495alexd@example.com",
      "offset": 52
    },
    {
      "val": "123456789",
      "offset": 88
    }
  ],
  "location": "LogIn.user_is_logging_in_with_correct_credentials_email_and_password(String,String)"
});
formatter.result({
  "duration": 478762237,
  "status": "passed"
});
formatter.match({
  "location": "LogIn.user_now_is_logged_in_on_Calc()"
});
formatter.result({
  "duration": 432601059,
  "status": "passed"
});
formatter.after({
  "duration": 718836370,
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
  "duration": 5360896806,
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
  "duration": 1180248603,
  "status": "passed"
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
  "duration": 860707522,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_should_successfully_be_registered()"
});
formatter.result({
  "duration": 5941670,
  "status": "passed"
});
formatter.after({
  "duration": 927968475,
  "status": "passed"
});
formatter.before({
  "duration": 5231516857,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Registration on the portal with existing user email",
  "description": "",
  "id": "the-purpose-of-the-feature-is-to-verify-that-the-user-can-register-on-the-site-by-giving;registration-on-the-portal-with-existing-user-email",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "User is on Create account page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User register with name \"Dimitris Alex\" password \"123456789\" and existing mail \"494alexd@example.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User should not successfully be registered",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_is_on_Create_account_page()"
});
formatter.result({
  "duration": 1168716132,
  "status": "passed"
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
      "val": "494alexd@example.com",
      "offset": 80
    }
  ],
  "location": "Registration.user_register_with_name_password_and_existing_mail(String,String,String)"
});
formatter.result({
  "duration": 844621463,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_should_not_successfully_be_registered()"
});
formatter.result({
  "duration": 5582082,
  "status": "passed"
});
formatter.after({
  "duration": 724746237,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Registration on the portal with with invalid values",
  "description": "",
  "id": "the-purpose-of-the-feature-is-to-verify-that-the-user-can-register-on-the-site-by-giving;registration-on-the-portal-with-with-invalid-values",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "User is on Create account page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User register with name \"\u003cname\u003e\" password \"\u003cpassword\u003e\" and existing mail \"\u003cemail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User should not successfully be registered",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "the-purpose-of-the-feature-is-to-verify-that-the-user-can-register-on-the-site-by-giving;registration-on-the-portal-with-with-invalid-values;",
  "rows": [
    {
      "cells": [
        "name",
        "password",
        "email"
      ],
      "line": 22,
      "id": "the-purpose-of-the-feature-is-to-verify-that-the-user-can-register-on-the-site-by-giving;registration-on-the-portal-with-with-invalid-values;;1"
    },
    {
      "cells": [
        "Dimitris Alex",
        "123456789",
        ""
      ],
      "line": 23,
      "id": "the-purpose-of-the-feature-is-to-verify-that-the-user-can-register-on-the-site-by-giving;registration-on-the-portal-with-with-invalid-values;;2"
    },
    {
      "cells": [
        "Dimitris Alex",
        "",
        "494alexd@example.com"
      ],
      "line": 24,
      "id": "the-purpose-of-the-feature-is-to-verify-that-the-user-can-register-on-the-site-by-giving;registration-on-the-portal-with-with-invalid-values;;3"
    },
    {
      "cells": [
        "",
        "123456789",
        "494alexd@example.com"
      ],
      "line": 25,
      "id": "the-purpose-of-the-feature-is-to-verify-that-the-user-can-register-on-the-site-by-giving;registration-on-the-portal-with-with-invalid-values;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5227036110,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Registration on the portal with with invalid values",
  "description": "",
  "id": "the-purpose-of-the-feature-is-to-verify-that-the-user-can-register-on-the-site-by-giving;registration-on-the-portal-with-with-invalid-values;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
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
formatter.step({
  "line": 18,
  "name": "User is on Create account page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User register with name \"Dimitris Alex\" password \"123456789\" and existing mail \"\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User should not successfully be registered",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_is_on_Create_account_page()"
});
formatter.result({
  "duration": 1192169389,
  "status": "passed"
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
      "val": "",
      "offset": 80
    }
  ],
  "location": "Registration.user_register_with_name_password_and_existing_mail(String,String,String)"
});
formatter.result({
  "duration": 775950369,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_should_not_successfully_be_registered()"
});
formatter.result({
  "duration": 22786917,
  "status": "passed"
});
formatter.after({
  "duration": 705300259,
  "status": "passed"
});
formatter.before({
  "duration": 5193565679,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Registration on the portal with with invalid values",
  "description": "",
  "id": "the-purpose-of-the-feature-is-to-verify-that-the-user-can-register-on-the-site-by-giving;registration-on-the-portal-with-with-invalid-values;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
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
formatter.step({
  "line": 18,
  "name": "User is on Create account page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User register with name \"Dimitris Alex\" password \"\" and existing mail \"494alexd@example.com\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User should not successfully be registered",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_is_on_Create_account_page()"
});
formatter.result({
  "duration": 1191685150,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dimitris Alex",
      "offset": 25
    },
    {
      "val": "",
      "offset": 50
    },
    {
      "val": "494alexd@example.com",
      "offset": 71
    }
  ],
  "location": "Registration.user_register_with_name_password_and_existing_mail(String,String,String)"
});
formatter.result({
  "duration": 771251101,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_should_not_successfully_be_registered()"
});
formatter.result({
  "duration": 8313106,
  "status": "passed"
});
formatter.after({
  "duration": 716651654,
  "status": "passed"
});
formatter.before({
  "duration": 5593706847,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Registration on the portal with with invalid values",
  "description": "",
  "id": "the-purpose-of-the-feature-is-to-verify-that-the-user-can-register-on-the-site-by-giving;registration-on-the-portal-with-with-invalid-values;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
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
formatter.step({
  "line": 18,
  "name": "User is on Create account page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User register with name \"\" password \"123456789\" and existing mail \"494alexd@example.com\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User should not successfully be registered",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_is_on_Create_account_page()"
});
formatter.result({
  "duration": 1130471025,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 25
    },
    {
      "val": "123456789",
      "offset": 37
    },
    {
      "val": "494alexd@example.com",
      "offset": 67
    }
  ],
  "location": "Registration.user_register_with_name_password_and_existing_mail(String,String,String)"
});
formatter.result({
  "duration": 911540782,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_should_not_successfully_be_registered()"
});
formatter.result({
  "duration": 16851916,
  "status": "passed"
});
formatter.after({
  "duration": 735533371,
  "status": "passed"
});
formatter.before({
  "duration": 5925876605,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "From Registration page user is going to login page",
  "description": "",
  "id": "the-purpose-of-the-feature-is-to-verify-that-the-user-can-register-on-the-site-by-giving;from-registration-page-user-is-going-to-login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "User is on Create account page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User is selecting Login button",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "Is successfully redirected on Login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_is_on_Create_account_page()"
});
formatter.result({
  "duration": 1162542089,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_is_selecting_Login_button()"
});
formatter.result({
  "duration": 119586940,
  "status": "passed"
});
formatter.match({
  "location": "Registration.is_successfully_redirected_on_Login_page()"
});
formatter.result({
  "duration": 8492643,
  "status": "passed"
});
formatter.after({
  "duration": 722379930,
  "status": "passed"
});
});