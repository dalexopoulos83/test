package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import webdrivers.DriverBase;

import static bindings.Hooks.*;
import static bindings.Hooks.waitToDisplayAndReturnStatus;

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

    @FindBy(css = "#root > div > div:nth-child(2) > section > div > button")
    WebElement add;

    @FindBy(css = "#root > div > div:nth-child(2) > section > div > table > tbody > tr > td:nth-child(1) > input[type=text]")
    WebElement addName;

    @FindBy(css = "#root > div > div:nth-child(2) > section > div > table > tbody > tr > td:nth-child(2) > input[type=number]")
    WebElement addCalories;

    @FindBy(css = "#root > div > div:nth-child(2) > section > div > table > tbody > tr > td:nth-child(3) > input[type=datetime-local]")
    WebElement addDatetime;

    @FindBy(css = "#root > div > div:nth-child(2) > section > div > table > tbody > tr > td:nth-child(5) > button")
    WebElement firstSave;

    @FindBy(css = "#root > div > div:nth-child(2) > section > div > table > tbody > tr:nth-child(2) > td:nth-child(5) > button")
    WebElement secondSave;

    @FindBy(css = "#root > div > div:nth-child(2) > section > div > table")
    WebElement ediblesTable;

    @FindBy(css = "#root > div > div:nth-child(2) > section > div > table > tbody > tr:nth-child(1) > td:nth-child(4) > button")
    WebElement edit;

    @FindBy(css = "#root > div > div:nth-child(2) > section > div > table > tbody > tr:nth-child(1) > td:nth-child(5) > button")
    WebElement saveEdited;

    @FindBy(css = "#root > div > div:nth-child(2) > section > div > table > tbody > tr:nth-child(1)")
    WebElement firstRow;

    @FindBy(css = "#root > div > div:nth-child(2) > section > div > table > tbody > tr:nth-child(1) > td:nth-child(5) > button")
    WebElement deleteFirstEntry;

    @FindBy(css = "#root > div > div:nth-child(2) > section > div > div.row.filters > div > button")
    WebElement filters;

    @FindBy(css = "#root > div > div:nth-child(2) > section > div > div.row.filters > form > div:nth-child(1) > input[type=date]:nth-child(2)")
    WebElement startDate;

    @FindBy(css = "#root > div > div:nth-child(2) > section > div > div.row.filters > form > div:nth-child(1) > input[type=date]:nth-child(4)")
    WebElement endDate;

    @FindBy(css = "#root > div > div:nth-child(2) > section > div > div.row.filters > form > button")
    WebElement setFilter;

    @FindBy(css = "#root > div > div:nth-child(2) > section > div > div.row.filters > form > div:nth-child(2) > input[type=time]:nth-child(2)")
    WebElement startTime;

    @FindBy(css = "#root > div > div:nth-child(2) > section > div > div.row.filters > form > div:nth-child(2) > input[type=time]:nth-child(4)")
    WebElement endTime;

    @FindBy(css = "#root > div > div:nth-child(2) > section > div > div.calorybox.u-full-width.red")
    WebElement errMsg;

    @FindBy(css = "#root > div > div:nth-child(2) > section > div > div.calorybox.u-full-width.green")
    WebElement okMsg;

    @FindBy(css = "#root > div > div:nth-child(2) > section > div > table > tbody > tr:nth-child(2) > td:nth-child(5) > button")
    WebElement delSecond;

    public void setDelSecond() {
        waitToDisplayAndClick(delSecond);
    }

    public boolean getErrMsg() {
        return waitToDisplayAndReturnStatus(errMsg);
    }

    public boolean getOkMsg() {
        return waitToDisplayAndReturnStatus(okMsg);
    }

    public void setEndTime(String arg1) {
        waitToDisplayAndSendKeysNoClear(endTime, arg1);
    }

    public void setStartTime(String arg1) {
        waitToDisplayAndSendKeysNoClear(startTime, arg1);
    }

    public void setSetFilter() {
        waitToDisplayAndClick(setFilter);
    }

    public void setEndDate(String arg1) {
        waitToDisplayAndSendKeysNoClear(endDate, arg1);
    }

    public void setStartDate(String arg1) {
        waitToDisplayAndSendKeysNoClear(startDate, arg1);
    }

    public void setFilters() {
        waitToDisplayAndClick(filters);
    }

    public void setDeleteFirstEntry() {
        waitToDisplayAndClick(deleteFirstEntry);
    }

    public String getFirstRow() {
        return waitToDisplayAndReturnContent(firstRow);
    }

    public void setSaveEdited() {
        waitToDisplayAndClick(saveEdited);
    }

    public void setEdit() {
        waitToDisplayAndClick(edit);
    }

    public String getEdiblesTable() {
        return waitToDisplayAndReturnContent(ediblesTable);
    }

    public void setFirstSave() {
        waitToDisplayAndClick(firstSave);
    }

    public void setSecondSave() {
        waitToDisplayAndClick(secondSave);
    }

    public void setAdd() {
        waitToDisplayAndClick(add);
    }

    public void setAddName(String arg1) {
        waitToDisplayAndSendKeys(addName, arg1);
    }

    public void setAddDatetime(String arg1, String arg2) {
        waitToDisplayAndSendKeysNoClear(addDatetime, arg1);
        sendTabAndType(addDatetime, arg2);
    }

    public void setAddCalories(String arg1) {
        waitToDisplayAndSendKeys(addCalories, arg1);
    }

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
