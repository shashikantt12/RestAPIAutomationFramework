package assessment.webservice.rest.test;

import org.junit.Assert;

import com.google.gson.JsonObject;

import assessment.webservice.rest.utility.Context;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;

public class RestWebServiceTest {

	Response response;
	String baseUri_Zippopotam = "http://api.zippopotam.us";
	String baseUri_CustomerReg = "http://restapi.demoqa.com";
	public RestWebServiceTest(){
		
	}
	
	public JsonObject prepareJson(String username, String email){
		JsonObject jsonObj = new JsonObject();
		jsonObj.addProperty("FirstName", "Shashi1");
		jsonObj.addProperty("LastName", "Tiwari1");
		jsonObj.addProperty("UserName", username);
		jsonObj.addProperty("Password", "password");
		jsonObj.addProperty("Email", email);
		
		return jsonObj;
	}
	
	public void getServiceForZippopotam(String methodType, String scenarioType){
		if(methodType.equalsIgnoreCase("get") && scenarioType.equalsIgnoreCase("valid")){
			response = RestAssured.given().urlEncodingEnabled(false).when().get(baseUri_Zippopotam+"/us/90210");
		} else if(methodType.equalsIgnoreCase("put") && scenarioType.equalsIgnoreCase("invalid")){
			response = RestAssured.given().urlEncodingEnabled(false).when().put(baseUri_Zippopotam+"/us/90210");
		}
		Context.setResponse(response);
	}
	
	public void postServiceForCustomerRegistration(String methodType, String scenarioType, String username, String email){
		response = RestAssured.given().urlEncodingEnabled(false).when().body(prepareJson(username, email)).post(baseUri_CustomerReg+"/customer/register");
		Context.setResponse(response);
	}
	
	public void verifyStatusCode(int statusCode){
		response = Context.getResponse();
		System.out.println(response.getStatusCode());
		System.out.println(response.then().extract().response().asString());
		Assert.assertEquals(statusCode, response.getStatusCode());
	}
	
	public void verifyStatusLine(String statusLine){
		response = Context.getResponse();
		System.out.println(response.getStatusLine());
		Assert.assertEquals(statusLine, response.getStatusLine());
	}
	
	public void verifyAttributesValue(String attributeKey, String value){
		response = Context.getResponse();
		String val = response.then().contentType(ContentType.JSON).extract().response().path(attributeKey).toString();
		Assert.assertEquals(value, val);
	}
	
}

