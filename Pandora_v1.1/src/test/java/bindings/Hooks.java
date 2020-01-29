package bindings;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.WebDriverWait;
import webdrivers.DriverBase;

import static java.util.concurrent.TimeUnit.SECONDS;


public class Hooks{

    DriverBase driverBase = new DriverBase();
    public static RemoteWebDriver driver = null;

    public static ExpectedCondition<Boolean> jQueryAJAXCallsHaveCompleted(){
        return new ExpectedCondition<Boolean>() {

            @Override
            public Boolean apply(WebDriver driver) {
                boolean ajaxComplete = false;
                ajaxComplete = (Boolean) ((JavascriptExecutor) driver).executeScript("return jQuery.active == 0");
                System.out.println("\n **** ajaxComplete: " + ajaxComplete + "\n");
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                return Boolean.valueOf (((JavascriptExecutor) driver).executeScript("return (window.onload = function() {alert(\"It's loaded!!!\")});").toString());
            }
        };
    }

    public static void waitElement(WebElement element) {
        WebDriverWait wait = new WebDriverWait(driver, 60, 100);
        wait.until((ExpectedCondition<Boolean>) driver-> element.isDisplayed());
    }

    public static boolean waitToDisplayAndReturnStatus(WebElement element) {
        WebDriverWait wait = new WebDriverWait(driver, 60, 100);
        wait.until((ExpectedCondition<Boolean>) driver-> element.isDisplayed());
        return element.isDisplayed();
    }

    public static void waitToDisplayAndClick(WebElement element) {
        WebDriverWait wait = new WebDriverWait(driver, 60, 100);
        wait.until((ExpectedCondition<Boolean>) driver-> element.isDisplayed());
        element.click();
    }

    public static void waitToDisplayAndSendKeys(WebElement element, String arg) {
        WebDriverWait wait = new WebDriverWait(driver, 60, 100);
        wait.until((ExpectedCondition<Boolean>) driver-> element.isDisplayed());
        element.clear();
        element.sendKeys(arg);
    }

    @Before
    public void instantiateDriverObject() {
        DriverBase.instantiateDriverObject();
        driver = driverBase.getDriver();
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
        driver.manage().timeouts().pageLoadTimeout(60, SECONDS);
        driver.get("http://calories-calc.herokuapp.com/");
    }

    @After
    public void closeDriverObjects() {
        driverBase.closeDriverObjects();
        }
}
