package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import webdrivers.DriverBase;
import static bindings.Hooks.waitToDisplayAndClick;
import static bindings.Hooks.waitToDisplayAndSendKeys;
import static bindings.Hooks.waitToDisplayAndReturnStatus;

public class LogInPage extends DriverBase{
    WebDriver driver;

    public LogInPage(){
        driver = getDriver();
        PageFactory.initElements(driver, this);
    }

    @FindBy(css="#email-input")
    WebElement email;

    @FindBy(css = "#password-input")
    WebElement password;

    @FindBy(css = "#login > div:nth-child(4) > input")
    WebElement login;

    @FindBy(css = "#root > div > div:nth-child(2) > div > div > a")
    WebElement register;

    @FindBy(css = "#root > div > div:nth-child(2) > section > header > h4")
    WebElement edibles;

    @FindBy(css = "#root > div > div:nth-child(2) > aside > nav > ul > li:nth-child(3) > span")
    WebElement logout;


    //Set user name in textbox
    public void setEmail(String arg1) {
        waitToDisplayAndSendKeys(email, arg1);
    }

    public void setPassword(String arg1) {
        waitToDisplayAndSendKeys(password, arg1);
    }

    public void setLogin() {
        waitToDisplayAndClick(login);
    }

    public void setRegister() {
        waitToDisplayAndClick(register);
    }

    public boolean getEdibles() {
        return waitToDisplayAndReturnStatus(edibles);
    }

    public boolean getLogin() {
        return waitToDisplayAndReturnStatus(login);
    }

    public void setLogout() {
        waitToDisplayAndClick(logout);
    }
}
