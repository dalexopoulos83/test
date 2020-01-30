package bindings;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageobjects.EdiblesPage;
import pageobjects.LogInPage;
import pageobjects.MainPage;

import static junit.framework.TestCase.assertTrue;

public class Edibles {
    LogInPage loginPage;
    MainPage mainPage;
    EdiblesPage ediblesPage;

    public Edibles() {
        loginPage = new LogInPage();
        mainPage = new MainPage();
        ediblesPage = new EdiblesPage();
    }

    @Given("^User is on Edibles page$")
    public void user_is_on_Edibles_page() throws Throwable {
        mainPage.getLogin();
        loginPage.setEmail("495alexd@example.com");
        loginPage.setPassword("123456789");
        loginPage.setLogin();
    }

    @When("^User is going on Profile page$")
    public void user_is_going_on_Profile_page() throws Throwable {
        ediblesPage.setProfile();
    }

    @Then("^User is updating his calories on \"([^\"]*)\"$")
    public void user_is_updating_his_calories_on(String arg1) throws Throwable {
        ediblesPage.setCalories(arg1);
        ediblesPage.setEdibles();
    }

    @When("^User is adding first record with name \"([^\"]*)\", \"([^\"]*)\", date \"([^\"]*)\" and time \"([^\"]*)\"$")
    public void user_is_adding_first_record_with_name_date_and_time(String arg1, String arg2, String arg3, String arg4) throws Throwable {
        ediblesPage.setAdd();
        ediblesPage.setAddName(arg1);
        ediblesPage.setAddCalories(arg2);
        ediblesPage.setAddDatetime(arg3, arg4);
        ediblesPage.setFirstSave();
    }

    @When("^User is adding a second entry with name \"([^\"]*)\", calories \"([^\"]*)\", date \"([^\"]*)\" and time \"([^\"]*)\"$")
    public void user_is_adding_a_second_entry_with_name_calories_date_and_time(String arg1, String arg2, String arg3, String arg4) throws Throwable {
        ediblesPage.setAdd();
        ediblesPage.setAddName(arg1);
        ediblesPage.setAddCalories(arg2);
        ediblesPage.setAddDatetime(arg3, arg4);
        ediblesPage.setSecondSave();
    }

    @When("^User is adding a second entry with name \"([^\"]*)\" and calories \"([^\"]*)\"$")
    public void user_is_adding_a_second_entry_with_name_and_calories(String arg1, String arg2) throws Throwable {
        ediblesPage.setAdd();
        ediblesPage.setAddName(arg1);
        ediblesPage.setAddCalories(arg2);
        ediblesPage.setSecondSave();
    }

    @Then("^New entry is present on app$")
    public void new_entry_is_present_on_app() throws Throwable {
        boolean var = true;
        String res = ediblesPage.getEdiblesTable();
        if(res.contains("Nothing found :(")){
            var = false;
        }
        assertTrue(var);
    }

    @When("^User is updating calories on the first entry to \"([^\"]*)\"$")
    public void user_is_updating_calories_on_the_first_entry_to(String arg1) throws Throwable {
        ediblesPage.setEdit();
        ediblesPage.setAddCalories(arg1);
        ediblesPage.setSaveEdited();
    }

    @Then("^Thr entry is now updated$")
    public void thr_entry_is_now_updated() throws Throwable {
        boolean var = false;
        String res = ediblesPage.getFirstRow();
        if(res.contains("2000")){
            var = true;
        }
        assertTrue(var);
    }

    @When("^User is deleting the first entry$")
    public void user_is_deleting_the_first_entry() throws Throwable {
        ediblesPage.setDeleteFirstEntry();
    }

    @Then("^Records should be updated$")
    public void records_should_be_updated() throws Throwable {
        boolean var = true;
        String res = ediblesPage.getEdiblesTable();
        if(res.contains("pasta")){
            var = false;
        }
        assertTrue(var);
    }

    @When("^User is updating filter by date with the value \"([^\"]*)\"$")
    public void user_is_updating_filter_by_date_with_the_value(String arg1) throws Throwable {
        ediblesPage.setFilters();
        ediblesPage.setStartDate(arg1);
        ediblesPage.setEndDate(arg1);
    }

    @Then("^Only records on (\\d+) are present on edibles$")
    public void only_records_on_are_present_on_edibles(int arg1) throws Throwable {
        boolean var = false;
        String res = ediblesPage.getFirstRow();
        if(res.contains(Integer.toString(arg1))){
            var = true;
        }
        assertTrue(var);
    }

    @When("^User is updating filter by time with start time \"([^\"]*)\" and end time \"([^\"]*)\"$")
    public void user_is_updating_filter_by_time_with_start_time_and_end_time(String arg1, String arg2) throws Throwable {
        ediblesPage.setStartTime(arg1);
        ediblesPage.setEndTime(arg2);
        ediblesPage.setSetFilter();
    }

    @Then("^Only records after (\\d+):(\\d+) are present on edibles$")
    public void only_records_after_are_present_on_edibles(int arg1, int arg2) throws Throwable {

    }

    @When("^User exceeds max daily calories$")
    public void user_exceeds_max_daily_calories() throws Throwable {

    }

    @Then("^A validation message displayed$")
    public void a_validation_message_displayed() throws Throwable {
        assertTrue(ediblesPage.getErrMsg());
    }

    @Then("^User decries daily calories$")
    public void user_decries_daily_calories() throws Throwable {
        ediblesPage.setDelSecond();
    }

    @Then("^Validation message is not displayed any more$")
    public void validation_message_is_not_displayed_any_more() throws Throwable {
        assertTrue(ediblesPage.getOkMsg());
    }
}
