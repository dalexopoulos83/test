package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import webdrivers.DriverBase;
import static bindings.Hooks.waitToDisplayAndClick;
import static bindings.Hooks.waitToDisplayAndSendKeys;

public class EdiblesPage extends DriverBase {
    WebDriver driver;

    public EdiblesPage() {
        driver = getDriver();
        PageFactory.initElements(driver, this);
    }

    @FindBy(css = "#root > div > div:nth-child(2) > aside > nav > ul > li:nth-child(2) > a")
    WebElement profile;

    @FindBy(css = "#max-daily-calories")
    WebElement calories;

    @FindBy(css = "#root > div > div:nth-child(2) > aside > nav > ul > li:nth-child(1) > a")
    WebElement edibles;

    public void setCalories(String arg) {
        waitToDisplayAndSendKeys(calories, arg);
    }

    public void setEdibles() {
        waitToDisplayAndClick(edibles);
    }

    public void setProfile() {
        waitToDisplayAndClick(profile);
    }
}
