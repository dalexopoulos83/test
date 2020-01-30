@run @edibles
Feature: The purpose of the feature is to validate that the user can add, edit and delete entries on edibles. Also
  we will cover the filtering and daily calories update.

  Scenario: Edit calories on Profile
    Given User is on Edibles page
    When User is going on Profile page
    Then User is updating his calories on "2500"


  Scenario: User can add records on Edibles
    Given User is on Edibles page
    When User is adding first record with name "pizza", "1500", date "01012021" and time "0301 1"
    And User is adding a second entry with name "pasta", calories "1400", date "01012020" and time "0400 1"
    Then New entry is present on app

  Scenario: User can delete a record on Edibles
    Given User is on Edibles page
    When User is deleting the first entry
    Then Records should be updated


  Scenario: User can edit a record on Edibles
    Given User is on Edibles page
    When User is updating calories on the first entry to "2000"
    Then Thr entry is now updated

  Scenario: User can short records by date and time
    Given User is on Edibles page
    When User is updating filter by date with the value "001012021"
    And User is updating filter by time with start time "02 01" and end time "05 01"
    Then Only records on 2021 are present on edibles

  Scenario: Exceeded calories per day validation
    Given User is on Edibles page
    When User is adding a second entry with name "salad" and calories "4000"
    Then A validation message displayed
    And User decries daily calories
    Then Validation message is not displayed any more
    And User is deleting the first entry