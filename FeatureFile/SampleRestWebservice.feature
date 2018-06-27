@SampleRestWebServiceTest
Feature: Cleartrip Flight Search

  @Verify_Zippopotam_Valid
  Scenario: Verify Get Valid request
    When I choose to verify the response of the api zippopotam with method "Get" for "valid" data
    Then I choose to verify the status code of the API is "200"
    Then I choose to verify the status line of the API is "HTTP/1.1 200 OK"
    And I choose to verify the attribute value of "post code" is "90210"
    And I choose to verify the attribute value of "country" is "United States"
    And I choose to verify the attribute value of "country abbreviation" is "US"
    And I choose to verify the attribute value of "post code" is "90210"
    And I choose to verify the attribute value of "post code" is "90210"

  @Verify_Zippopotam_InValid
  Scenario: Verify Get Invalid request - Wrong method type
    When I choose to verify the response of the api zippopotam with method "Put" for "invalid" data
    Then I choose to verify the status code of the API is "405"
    Then I choose to verify the status line of the API is "HTTP/1.1 405 Method Not Allowed"
    
 @Verify_CustomerRegisstration_Post
   Scenario Outline: Verify POST request
    When I choose to verify the response of the api customer registration with method "post" for "valid" data as <username> and <email>
    Then I choose to verify the status code of the API is "201"
    Then I choose to verify the status line of the API is "HTTP/1.1 201 Created"
    And I choose to verify the attribute value of "SuccessCode" is "OPERATION_SUCCESS"
    And I choose to verify the attribute value of "Message" is "Operation completed successfully"
    
    Examples:
    | username | email |
    | "shashi5" | "shashi5@abc.com" |