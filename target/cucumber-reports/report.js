$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SampleRestWebservice.feature");
formatter.feature({
  "line": 2,
  "name": "Cleartrip Flight Search",
  "description": "",
  "id": "cleartrip-flight-search",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SampleRestWebServiceTest"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Verify Get Valid request",
  "description": "",
  "id": "cleartrip-flight-search;verify-get-valid-request",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Verify_Zippopotam_Valid"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I choose to verify the response of the api zippopotam with method \"Get\" for \"valid\" data",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I choose to verify the status code of the API is \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I choose to verify the status line of the API is \"HTTP/1.1 200 OK\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I choose to verify the attribute value of \"post code\" is \"90210\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I choose to verify the attribute value of \"country\" is \"United States\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I choose to verify the attribute value of \"country abbreviation\" is \"US\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I choose to verify the attribute value of \"post code\" is \"90210\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I choose to verify the attribute value of \"post code\" is \"90210\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Get",
      "offset": 67
    },
    {
      "val": "valid",
      "offset": 77
    }
  ],
  "location": "RestWebServiceTestStepDefinition.verify_get_service(String,String)"
});
formatter.result({
  "duration": 1411643968,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 50
    }
  ],
  "location": "RestWebServiceTestStepDefinition.verify_statuscode(int)"
});
formatter.result({
  "duration": 18129077,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HTTP/1.1 200 OK",
      "offset": 50
    }
  ],
  "location": "RestWebServiceTestStepDefinition.verify_statusline(String)"
});
formatter.result({
  "duration": 106951,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "post code",
      "offset": 43
    },
    {
      "val": "90210",
      "offset": 58
    }
  ],
  "location": "RestWebServiceTestStepDefinition.verify_attributeValue(String,String)"
});
formatter.result({
  "duration": 282466294,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "country",
      "offset": 43
    },
    {
      "val": "United States",
      "offset": 56
    }
  ],
  "location": "RestWebServiceTestStepDefinition.verify_attributeValue(String,String)"
});
formatter.result({
  "duration": 15989201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "country abbreviation",
      "offset": 43
    },
    {
      "val": "US",
      "offset": 69
    }
  ],
  "location": "RestWebServiceTestStepDefinition.verify_attributeValue(String,String)"
});
formatter.result({
  "duration": 5421799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "post code",
      "offset": 43
    },
    {
      "val": "90210",
      "offset": 58
    }
  ],
  "location": "RestWebServiceTestStepDefinition.verify_attributeValue(String,String)"
});
formatter.result({
  "duration": 5422083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "post code",
      "offset": 43
    },
    {
      "val": "90210",
      "offset": 58
    }
  ],
  "location": "RestWebServiceTestStepDefinition.verify_attributeValue(String,String)"
});
formatter.result({
  "duration": 5503719,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify Get Invalid request - Wrong method type",
  "description": "",
  "id": "cleartrip-flight-search;verify-get-invalid-request---wrong-method-type",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Verify_Zippopotam_InValid"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I choose to verify the response of the api zippopotam with method \"Put\" for \"invalid\" data",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I choose to verify the status code of the API is \"405\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I choose to verify the status line of the API is \"HTTP/1.1 405 Method Not Allowed\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Put",
      "offset": 67
    },
    {
      "val": "invalid",
      "offset": 77
    }
  ],
  "location": "RestWebServiceTestStepDefinition.verify_get_service(String,String)"
});
formatter.result({
  "duration": 523120369,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "405",
      "offset": 50
    }
  ],
  "location": "RestWebServiceTestStepDefinition.verify_statuscode(int)"
});
formatter.result({
  "duration": 3834883,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HTTP/1.1 405 Method Not Allowed",
      "offset": 50
    }
  ],
  "location": "RestWebServiceTestStepDefinition.verify_statusline(String)"
});
formatter.result({
  "duration": 150187,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Verify POST request",
  "description": "",
  "id": "cleartrip-flight-search;verify-post-request",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@Verify_CustomerRegisstration_Post"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I choose to verify the response of the api customer registration with method \"post\" for \"valid\" data as \u003cusername\u003e and \u003cemail\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I choose to verify the status code of the API is \"201\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I choose to verify the status line of the API is \"HTTP/1.1 201 Created\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I choose to verify the attribute value of \"SuccessCode\" is \"OPERATION_SUCCESS\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I choose to verify the attribute value of \"Message\" is \"Operation completed successfully\"",
  "keyword": "And "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "cleartrip-flight-search;verify-post-request;",
  "rows": [
    {
      "cells": [
        "username",
        "email"
      ],
      "line": 30,
      "id": "cleartrip-flight-search;verify-post-request;;1"
    },
    {
      "cells": [
        "\"shashi5\"",
        "\"shashi5@abc.com\""
      ],
      "line": 31,
      "id": "cleartrip-flight-search;verify-post-request;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 31,
  "name": "Verify POST request",
  "description": "",
  "id": "cleartrip-flight-search;verify-post-request;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SampleRestWebServiceTest"
    },
    {
      "line": 21,
      "name": "@Verify_CustomerRegisstration_Post"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I choose to verify the response of the api customer registration with method \"post\" for \"valid\" data as \"shashi5\" and \"shashi5@abc.com\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I choose to verify the status code of the API is \"201\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I choose to verify the status line of the API is \"HTTP/1.1 201 Created\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I choose to verify the attribute value of \"SuccessCode\" is \"OPERATION_SUCCESS\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I choose to verify the attribute value of \"Message\" is \"Operation completed successfully\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "post",
      "offset": 78
    },
    {
      "val": "valid",
      "offset": 89
    },
    {
      "val": "shashi5",
      "offset": 105
    },
    {
      "val": "shashi5@abc.com",
      "offset": 119
    }
  ],
  "location": "RestWebServiceTestStepDefinition.verify_post_service(String,String,String,String)"
});
formatter.result({
  "duration": 2604844433,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 50
    }
  ],
  "location": "RestWebServiceTestStepDefinition.verify_statuscode(int)"
});
formatter.result({
  "duration": 428942,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HTTP/1.1 201 Created",
      "offset": 50
    }
  ],
  "location": "RestWebServiceTestStepDefinition.verify_statusline(String)"
});
formatter.result({
  "duration": 49209,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SuccessCode",
      "offset": 43
    },
    {
      "val": "OPERATION_SUCCESS",
      "offset": 60
    }
  ],
  "location": "RestWebServiceTestStepDefinition.verify_attributeValue(String,String)"
});
formatter.result({
  "duration": 8176930,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Message",
      "offset": 43
    },
    {
      "val": "Operation completed successfully",
      "offset": 56
    }
  ],
  "location": "RestWebServiceTestStepDefinition.verify_attributeValue(String,String)"
});
formatter.result({
  "duration": 7222902,
  "status": "passed"
});
});