package assessment.webservice.rest.runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		tags = "@SampleRestWebServiceTest", 
		features = "../WebServiceTestAssessment/FeatureFile", 
		glue={"assessment.webservice.rest.stepdefinitions"}, 
		monochrome = true,
		plugin = { "pretty", "html:target/cucumber-reports",
		"json:target/cucumber-reports/cucumber.json"})
public class Runcukes {

}
