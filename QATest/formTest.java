package test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;
import org.testng.Assert;

public class formTest {
	
	WebDriver driver;
	
	@BeforeTest
	public void setUp() {
		System.out.println("This the start of test");
		String url = "https://csc642-gatorbuy.web.app/checkout";
		
		/*Chrome*/
		//System.setProperty("webdriver.chrome.driver","/Users/nianziyi/browserDriver/chromedriver");
		//ChromeDriver driver =new ChromeDriver();
		
		/*Firefox*/
		System.setProperty("webdriver.gecko.driver","/Users/nianziyi/browserDriver/geckodriver");
		driver =new FirefoxDriver();
		
		driver.get(url);
		driver.manage().window().maximize();
	}
	
	@Test(priority=1,description="Test if user can locate to correct page")
	public void titleTest() {
		String actualTitle = driver.getTitle();
		String expectedTitle = "React App";
		Assert.assertEquals(actualTitle,expectedTitle);
	}
	
	@Test(priority=2,description="Test if user can type in their name, email, and phone")
	public void inputTest() {
		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div/div[1]/form/div[1]/input")).sendKeys("John");
		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div/div[1]/form/div[2]/input")).sendKeys("your@mail.sfsu.edu");
		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div/div[1]/form/div[3]/input")).sendKeys("1234567890");	
	}
	
	@Test(priority=3,description="Test if user can select pickup location and time")
	public void selectTest() {
		Select location = new Select(driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div/div[1]/form/div[4]/select")));
		location.selectByVisibleText("UPN");
		Select time = new Select(driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div/div[1]/form/div[5]/div[1]/select")));
		time.selectByVisibleText("08:00");
		Select ampm = new Select(driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div/div[1]/form/div[5]/div[2]/select")));
		ampm.selectByVisibleText("AM");
	}
	
	@Test(priority=4,description="Test if user can click the term agreement")
	public void termTest() {
		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div/div[1]/form/div[5]/div[3]/div/input")).click();
		
	}
	
	@Test(priority=5,description="Test if user can click the checkout button")
	public void checkoutTest() {
		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div/div[1]/form/div[5]/a/button")).click();
		
	}
	
	@AfterTest
	public void end() {
		driver.close();
		System.out.println("Test results are ready:");
		System.out.println();
	}
}
