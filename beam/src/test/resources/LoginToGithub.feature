Feature: Github Launch and search the repository 

@GITHUB_Signin 
Scenario Outline: Launch the Github application and verify the repository 
	Given I open the URL in browse "<Browser>" 
	When I enter the "<UserName>" and "<Password>" credentials for "<Testcase>" testcase
	And I search the repository name "<RepositoryName>" for "<Testcase>" in Github 
	Then I close the browser 
	
	Examples: 
		|Testcase|UserName				   |Password	 |Browser|RepositoryName|
		|TC001	 |****************|********|chrome |test_Beam		|
		|TC002	 |****************|********|firefox|test_Beam     |