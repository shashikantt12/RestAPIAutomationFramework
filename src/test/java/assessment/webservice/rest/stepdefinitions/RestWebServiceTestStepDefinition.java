package assessment.webservice.rest.stepdefinitions;

import assessment.webservice.rest.test.RestWebServiceTest;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class RestWebServiceTestStepDefinition {

	RestWebServiceTest restTest;
	public RestWebServiceTestStepDefinition(){
		restTest = new RestWebServiceTest();
	}
	
	@When("^I choose to verify the response of the api zippopotam with method \"([^\"]*)\" for \"([^\"]*)\" data$")
	public void verify_get_service(String methodType, String scenarioType){
		restTest.getServiceForZippopotam(methodType, scenarioType);
	}
	
	@When("^I choose to verify the response of the api customer registration with method \"([^\"]*)\" for \"([^\"]*)\" data as \"([^\"]*)\" and \"([^\"]*)\"$")
	public void verify_post_service(String methodType, String scenarioType, String username, String email){
		restTest.postServiceForCustomerRegistration(methodType, scenarioType, username, email);
	}
	
	@Then("^I choose to verify the status code of the API is \"([^\"]*)\"$")
	public void verify_statuscode(int statusCode){
		restTest.verifyStatusCode(statusCode);
	}
	
	@Then("^I choose to verify the status line of the API is \"([^\"]*)\"$")
	public void verify_statusline(String statusLine){
		restTest.verifyStatusLine(statusLine);
	}
	
	@Then("^I choose to verify the attribute value of \"([^\"]*)\" is \"([^\"]*)\"$")
	public void verify_attributeValue(String key, String value){
		if(key.equals("post code")){
			restTest.verifyAttributesValue("'post code'", value);
		} else if(key.equals("country abbreviation")){
			restTest.verifyAttributesValue("'country abbreviation'", value);
		} else {
			restTest.verifyAttributesValue(key, value);
		}
	}
	
}
