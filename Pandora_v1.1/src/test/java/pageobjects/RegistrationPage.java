package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import webdrivers.DriverBase;
import static bindings.Hooks.waitToDisplayAndClick;
import static bindings.Hooks.waitToDisplayAndSendKeys;

public class RegistrationPage extends DriverBase {
    WebDriver driver;

    public RegistrationPage() {
        driver = getDriver();
        PageFactory.initElements(driver, this);
    }

    @FindBy(css = "#name-input")
    WebElement name;

    @FindBy(css = "#email-input")
    WebElement email;

    @FindBy(css = "#password-input")
    WebElement password;

    @FindBy(css = "#password-confirmation-input")
    WebElement pass_confirm;

    @FindBy(css = "#registration > div:nth-child(6) > input")
    WebElement join;

    @FindBy(css = "#root > div > div:nth-child(2) > div > div > a")
    WebElement login;

    public void setName(String arg) {
        waitToDisplayAndSendKeys(name, arg);
    }

    public void setEmail(String arg) {
        waitToDisplayAndSendKeys(email, arg);
    }

    public void setPassword(String arg) {
        waitToDisplayAndSendKeys(password, arg);
    }

    public void setPass_confirm(String arg) {
        waitToDisplayAndSendKeys(pass_confirm, arg);
    }

    public void setJoin() {
        waitToDisplayAndClick(join);
    }

    public void setLogin() {
        waitToDisplayAndClick(login);
    }
}
