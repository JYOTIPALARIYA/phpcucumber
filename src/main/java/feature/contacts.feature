Feature: Demo site
Scenario Outline: Test Scenario
Given User is already on login page
When title is ToolsQA	
Then User enters "<username>" and "<password>"
And User clicks on Login button
Then User reaches to Home Page
Then User clicks on Form link then New form link
Then User entering "<firstName>" and "<lastName>" and "<email>"  and "<mobile>" and "<subject>" and "<upload>" and "<address>"
Then User clicks on Submit button

Examples:
		|username | password  | firstName   | lastName | email			  | mobile 	     | subject  |                           upload                     | address  |
		|Jyoti    | Test@12345| Jyoti 		  | Palariya | jy@gmail.com | '' | CS			  | C://Users//jyoti//Downloads/IMG-20200821-WA0014.jpg  | Nainital |
