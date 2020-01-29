package bindings;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageobjects.MainPage;
import pageobjects.RegistrationPage;
import static org.junit.Assert.*;
import java.util.Random;
import static bindings.Hooks.driver;
import static bindings.Hooks.waitToDisplayAndClick;
import static java.sql.DriverManager.getDriver;

public class Registration {
    MainPage mainPage;
    RegistrationPage registrationPage;

    public Registration() {
        mainPage = new MainPage();
        registrationPage = new RegistrationPage();
    }

    @Given("^User is on Create account page$")
    public void user_is_on_Create_account_page() throws Throwable {
        mainPage.getRegister();
    }

    @When("^User register with name \"([^\"]*)\" password \"([^\"]*)\" and mail \"([^\"]*)\"$")
    public void user_register_with_name_password_and_mail(String name, String psw, String email) throws Throwable {
        Random rand = new Random();
        String rand_int1 = String.valueOf(rand.nextInt(1000));
        registrationPage.setName(name);
        registrationPage.setEmail(rand_int1 + email);
        registrationPage.setPassword(psw);
        registrationPage.setPass_confirm(psw);
        registrationPage.setJoin();
    }

    @Then("^User should successfully be registered$")
    public void user_should_successfully_be_registered() throws Throwable {
        boolean ast = false;
        String expectedUrl = "herokuapp.com/register";
        String currentUrl = driver.getCurrentUrl();
        if (currentUrl.toLowerCase().contains(expectedUrl.toLowerCase())){
            ast = true;
        }
        assertTrue(ast);
    }

    @When("^User register with name \"([^\"]*)\" password \"([^\"]*)\" and existing mail \"([^\"]*)\"$")
    public void user_register_with_name_password_and_existing_mail(String name, String psw, String email) throws Throwable {
        registrationPage.setName(name);
        registrationPage.setEmail(email);
        registrationPage.setPassword(psw);
        registrationPage.setPass_confirm(psw);
        registrationPage.setJoin();
    }

    @Then("^User should not successfully be registered$")
    public void user_should_not_successfully_be_registered() throws Throwable {
        boolean ast = true;
        String expectedUrl = "herokuapp.com/register";
        String currentUrl = driver.getCurrentUrl();
        if (currentUrl.toLowerCase().contains(expectedUrl.toLowerCase())){
            ast = false;
        }
        assertFalse(ast);
    }

    @When("^User is selecting Login button$")
    public void user_is_selecting_Login_button() throws Throwable {
        registrationPage.setLogin();
    }

    @Then("^Is successfully redirected on Login page$")
    public void is_successfully_redirected_on_Login_page() throws Throwable {
        boolean ast = false;
        String expectedUrl = "herokuapp.com/login";
        String currentUrl = driver.getCurrentUrl();
        if (currentUrl.toLowerCase().contains(expectedUrl.toLowerCase())){
            ast = true;
        }
        assertTrue(ast);
    }
}
