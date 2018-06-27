package assessment.webservice.rest.utility;

import io.restassured.response.Response;

public class Context {

	private static Response response;

	public static Response getResponse() {
		return response;
	}

	public static void setResponse(Response response) {
		Context.response = response;
	}
	
}
