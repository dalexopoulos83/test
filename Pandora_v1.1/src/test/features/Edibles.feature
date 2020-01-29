@run @login
Feature: Edibles

  Scenario: Edit calories on Profile
    Given User is on Edibles page
    When User is going on Profile page
    Then User is updating his calories on "2500"


  Scenario Outline: User can add records on Edibles
    Given User is on Edibles page
    When User is adding a record with "<name>", "<calories>", "<date>"
    Then New entry is present on app
    Examples:
    |name|calories|date|

  Scenario: User can edit a record on Edibles
    Given User is on Edibles page
    When User is updating calories on the first entry to "Past", "2000", "2020-01-27T20:19"
    Then Thr entry is now updated

  Scenario: User can delete a record on Edibles
    Given User is on Edibles page
    When User is deleting the first entry
    Then Records should be updated

  Scenario: User can short records by date
    Given User is on Edibles page
    When User is updating filter by date with the value "2020-01-28"
    Then Only records on 2020 are present on edibles

  Scenario: User can short records by time
    Given User is on Edibles page
    When User is updating filter by time with the value "13:00"
    Then Only records after 13:00 are present on edibles

  Scenario: Exceeded calories per day validation
    Given User is on Edibles page
    When User exceeds max daily calories
    Then A validation message displayed
    And User decries daily calories
    Then Validation message is not displayed any more