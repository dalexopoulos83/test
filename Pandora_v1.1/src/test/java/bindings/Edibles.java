package bindings;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageobjects.EdiblesPage;
import pageobjects.LogInPage;
import pageobjects.MainPage;

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

    @When("^User is updating calories on the first entry to \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
    public void user_is_updating_calories_on_the_first_entry_to(String arg1, String arg2, String arg3) throws Throwable {

    }

    @Then("^Thr entry is now updated$")
    public void thr_entry_is_now_updated() throws Throwable {

    }

    @When("^User is deleting the first entry$")
    public void user_is_deleting_the_first_entry() throws Throwable {

    }

    @Then("^Records should be updated$")
    public void records_should_be_updated() throws Throwable {

    }

    @When("^User is updating filter by date with the value \"([^\"]*)\"$")
    public void user_is_updating_filter_by_date_with_the_value(String arg1) throws Throwable {

    }

    @Then("^Only records on (\\d+) are present on edibles$")
    public void only_records_on_are_present_on_edibles(int arg1) throws Throwable {

    }

    @When("^User is updating filter by time with the value \"([^\"]*)\"$")
    public void user_is_updating_filter_by_time_with_the_value(String arg1) throws Throwable {

    }

    @Then("^Only records after (\\d+):(\\d+) are present on edibles$")
    public void only_records_after_are_present_on_edibles(int arg1, int arg2) throws Throwable {

    }

    @When("^User exceeds max daily calories$")
    public void user_exceeds_max_daily_calories() throws Throwable {

    }

    @Then("^A validation message displayed$")
    public void a_validation_message_displayed() throws Throwable {

    }

    @Then("^User decries daily calories$")
    public void user_decries_daily_calories() throws Throwable {

    }

    @Then("^Validation message is not displayed any more$")
    public void validation_message_is_not_displayed_any_more() throws Throwable {

    }
}
