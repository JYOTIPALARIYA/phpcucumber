package StepDefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class LoginStepDefinition {

	WebDriver driver;
	@Given("^User is already on login page$")
	public void User_is_already_on_login_page()
	{
		System.setProperty("webdriver.chrome.driver","E:/selenium/gc/chromedriver_win32 (1)/chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("https://demoqa.com/login");
	}
	@When("^title is ToolsQA$")
	public void title_is_ToolsQA() throws Throwable {
		String str=driver.getTitle();
		Assert.assertEquals("ToolsQA",str);
	    // Write code here that turns the phrase above into concrete actions
	   // throw new PendingException();
	}

//	@Then("^User enters Username and Password$")
//	public void user_enters_Username_and_Password() throws Throwable {
//		driver.findElement(By.xpath("//*[@id=\"userName\"]")).sendKeys("Jyoti");
//		driver.findElement(By.xpath("//*[@id=\"password\"]")).sendKeys("Test@12345");
//		
//	}
	//for data driven
	//1)withoud eample
	//2)with examples
	@Then("^User enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_Username_and_Password(String username, String password) {
		driver.findElement(By.xpath("//*[@id=\"userName\"]")).sendKeys(username);
		driver.findElement(By.xpath("//*[@id=\"password\"]")).sendKeys(password);
		
	}

	@Then("^User clicks on Login button$")
	public void user_clicks_on_Login_button()  {
		driver.findElement(By.xpath("//*[@id=\"login\"]")).click();
	}
	@Then("^User reaches to Home Page$")
	public void User_reaches_to_Home_Page()  {
		String str=driver.getTitle();
		Assert.assertEquals("ToolsQA",str);
	}
	
	@Then ("^User clicks on Form link then New form link$")
	public void User_clicks_on_Form_link_then_New_form_link()
	{
		driver.findElement(By.xpath("//div[@class='header-text' and text()='Forms']")).click();
		driver.findElement(By.xpath("//*[@id='item-0']/span[text()='Practice Form']")).click();
		
	}
	@Then ("^User entering \"(.*)\" and \"(.*)\" and \"(.*)\"  and \"(.*)\" and \"(.*)\" and \"(.*)\" and \"(.*)\"$")
	public void User_entering_firstName_and_lastName_and_email_and_mobile_and_subject_and_upload_and_address(String firstName,String
			lastName,String email,String mobile,String subject, String upload, String address)
	{
		driver.findElement(By.xpath("//input[@id='firstName']")).sendKeys("firstName");
		driver.findElement(By.xpath("//input[@id='lastName']")).sendKeys("lastName");
		driver.findElement(By.xpath("//input[@id='userEmail']")).sendKeys("email");
		
		driver.findElement(By.xpath("//label[text()=\"Male\"]")).click();
		driver.findElement(By.xpath("//input[@id='userNumber']")).sendKeys("mobile");
		driver.findElement(By.xpath("//input[@id='subjectsInput']")).sendKeys("subject");
		driver.findElement(By.xpath("//*[@id=\"hobbiesWrapper\"]/div[2]/div[1]/label/text()")).click();
		driver.findElement(By.xpath("//input[@id='uploadPicture']")).sendKeys("upload");
		driver.findElement(By.xpath("//*[@id='currentAddress']")).sendKeys("address");
		
		
	}
	@Then ("^User clicks on Submit button$")
	public void Then_User_clicks_on_Submit_button()
	{
		driver.findElement(By.xpath("//button[@id=\"submit\"]")).click();
	}
	
	
	@Then("^close the browser$")
	public void close_the_browser()
	{
		driver.close();
	}
	
}
