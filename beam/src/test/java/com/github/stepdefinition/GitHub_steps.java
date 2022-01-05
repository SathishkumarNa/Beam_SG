package com.github.stepdefinition;

import com.github.pages.Github_Launch;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class GitHub_steps {

	  
	@Given("^I open the URL in browse \"([^\"]*)\"$")
	public void i_open_the_URL_in_browse(String browser) throws Throwable {
		 // Write code here that turns the phrase above into concrete actions
		try {
			Github_Launch.URL(browser);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.err.println("Exception occured in URL lauch Steps" + e.getMessage());
		}
	}

	@When("^I enter the \"([^\"]*)\" and \"([^\"]*)\" credentials for \"([^\"]*)\" testcase$")
	public void i_enter_the_and(String UserName, String Password, String testcase) {
	    // Write code here that turns the phrase above into concrete actions
		try {
			Github_Launch.enterCredentials(UserName,Password,testcase);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.err.println("Exception occured in enter credential Steps" + e.getMessage());
		}
	}

	@And("^I search the repository name \"([^\"]*)\" for \"([^\"]*)\" in Github$")
	public void i_search_the_repository_name_for_in_Github(String RepositoryName, String tcName) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Github_Launch.searchRepo(RepositoryName, tcName);
	}

	@Then("^I close the browser$")
	public void i_close_the_browser() {
	    // Write code here that turns the phrase above into concrete actions
		Github_Launch.closeBrowser();
	}
}
