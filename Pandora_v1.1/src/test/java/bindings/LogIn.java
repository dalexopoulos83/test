package bindings;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageobjects.LogInPage;
import pageobjects.MainPage;

import static bindings.Hooks.driver;
import static org.junit.Assert.*;

public class LogIn {

    LogInPage loginPage;
    MainPage mainPage;

    public LogIn(){
        loginPage = new LogInPage();
        mainPage = new MainPage();
    }

    @Given("^User is on Login Page$")
    public void user_is_on_Login_Page() throws Throwable {
        mainPage.getLogin();
    }

    @When("^User is logging in with correct credentials, email \"([^\"]*)\" and password \"([^\"]*)\"$")
    public void user_is_logging_in_with_correct_credentials_email_and_password(String email, String psw) throws Throwable {
        loginPage.setEmail(email);
        loginPage.setPassword(psw);
        loginPage.setLogin();
    }

    @Then("^User now is logged in on Calc$")
    public void user_now_is_logged_in_on_Calc() throws Throwable {
        boolean ast = false;
        ast = loginPage.getEdibles();
        assertTrue(ast);
    }

    @When("^User is logging in with credentials, email \"([^\"]*)\" and password \"([^\"]*)\"$")
    public void user_is_logging_in_with_credentials_email_and_password(String email, String psw) throws Throwable {
        loginPage.setEmail(email);
        loginPage.setPassword(psw);
        loginPage.setLogin();
    }

    @Then("^User now should not logged in on Calc$")
    public void user_now_should_not_logged_in_on_Calc() throws Throwable {
        boolean ast = false;
        ast = loginPage.getLogin();
        assertTrue(ast);
    }

    @Then("^User is logging out from Calc page$")
    public void user_is_logging_out_from_Calc_page() throws Throwable {
        loginPage.setLogout();
    }

}
