package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.WebDriverWait;
import webdrivers.DriverBase;
import static bindings.Hooks.waitToDisplayAndClick;

public class MainPage extends DriverBase{
    WebDriver driver;

    public MainPage(){
        driver = getDriver();
        PageFactory.initElements(driver, this);
    }

    @FindBy(css="#root > div > div:nth-child(2) > div > div > div:nth-child(5) > a")
    WebElement login;

    @FindBy(css = "#root > div > div:nth-child(2) > div > div > div:nth-child(3) > a")
    WebElement register;


    public void getLogin() {
        waitToDisplayAndClick(login);
    }

    public void getRegister(){
        waitToDisplayAndClick(register);
    }
}
