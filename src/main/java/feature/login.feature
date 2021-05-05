# without example keyword
#Feature: Demo site
#Scenario: Test Scenario
#Given User is already on login page
#When title is ToolsQA
#Then User enters Username and Password 	
#Then User enters "Jyoti" and "Test@12345"
#And User clicks on Login button
#Then User reaches to Home Page

#with example keyword
Feature: Demo site
Scenario Outline: Test Scenario
Given User is already on login page
When title is ToolsQA
#Then User enters Username and Password 	
Then User enters "<username>" and "<password>"
And User clicks on Login button
Then User reaches to Home Page
Then close the browser

Examples:
		| username | 	 password |
		| Jyoti    | Test@12345 |
		| jyotip   | tEst@12345 | 