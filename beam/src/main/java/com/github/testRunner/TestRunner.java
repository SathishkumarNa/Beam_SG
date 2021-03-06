package com.github.testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "./src/test/resources",
		glue = {"com.github.stepdefinition"}, 
		plugin = {"pretty", "json:target/cucumber.json",
				"html:target/cucumber-html-report",
		"com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/TestResult.html"}, 
		monochrome = true,
		tags = {"@GITHUB_Signin"})


public class TestRunner  {

}