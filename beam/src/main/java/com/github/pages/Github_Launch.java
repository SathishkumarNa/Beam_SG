/**
 * 
 */
package com.github.pages;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.asserts.Assertion;

import junit.framework.Assert;

/**
 * @author Sathish
 *
 */
public class Github_Launch {

	public static String chrome = "webdriver.chrome.driver";
	public static String driverPath = "./driverFactory/chromedriver.exe";
	public static String firefox = "webdriver.gecko.driver";
	public static WebDriver driver = null;


	public static void URL(String browser) {
		try {
			if(browser.equalsIgnoreCase("chrome")){
				System.setProperty(chrome, driverPath);	
				driver = new ChromeDriver();
			}else {
				System.setProperty(firefox, "./driverFactory/geckodriver.exe");		
				driver = new FirefoxDriver();			
			}
			//System.setProperty(chrome, driverPath);

			System.out.println("driver is invoked successfully");
			driver.manage().window().maximize();
			driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
			driver.get("https://www.github.com");
			waitFunction();
		} catch (Exception e) {
			System.err.println("Exception occured in Browser Launch method" + e.getMessage());
		}
	}

	public static void waitFunction(){
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	public static void enterCredentials(String userName, String Password, String testcase) {
		// TODO Auto-generated method stub
		try {
			//sign link
			driver.findElement(By.xpath("//a[contains(text(),'Sign in')]")).click();
			//Username
			WebElement userNme = driver.findElement(By.xpath("//input[@name='login']"));
			userNme.sendKeys(userName);
			//password
			WebElement password = driver.findElement(By.xpath("//input[@name='password']"));
			password.sendKeys(Password);
			//signin button
			driver.findElement(By.xpath("//input[@name='commit']")).click();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.err.println("Exception occured in Entercredentials method" + e.getMessage());
		}
	}

	public static void searchRepo(String repositoryName, String tcName) {
		try {
			WebDriverWait wait = new WebDriverWait(driver, 20);
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@id='dashboard-repos-filter-left']")));
			WebElement searchText = driver.findElement(By.xpath("//input[@id='dashboard-repos-filter-left']"));
			searchText.sendKeys(repositoryName);
			searchText.sendKeys(Keys.ENTER);
			String actualValue = driver.findElement(By.xpath("//body/div[6]/div[1]/aside[1]/div[2]/div[1]/div[1]/ul[1]/li[1]/div[1]/div[1]/a[1]")).getAttribute("href");
			if(actualValue.contains(repositoryName)){			
				System.out.println("The Acutal Value is " + actualValue);
			}else{
				System.err.println("The Acutal Value is not matching" + actualValue);
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.err.println("Exception occured in search result method"+e.getMessage());
		}
	}
	public static void closeBrowser() {
		try {
			driver.findElement(By.xpath("//header/div[7]/details[1]/summary[1]")).click();
			driver.findElement(By.xpath("//button[contains(text(),'Sign out')]")).click();
			driver.quit();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.err.println("Exception occured in Entercredentials method"+e.getMessage());
		}
	}
}
