$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/eclipseworkspace/phpcucumber/src/main/java/feature/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Demo site",
  "description": "",
  "id": "demo-site",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Test Scenario",
  "description": "",
  "id": "demo-site;test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title is ToolsQA",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User reaches to Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Form link then New form link",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User entering \"\u003cfirstName\u003e\" and \"\u003clastName\u003e\" and \"\u003cemail\u003e\"  and \"\u003cmobile\u003e\" and \"\u003csubject\u003e\" and \"\u003cupload\u003e\" and \"\u003caddress\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Submit button",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "demo-site;test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstName",
        "lastName",
        "email",
        "mobile",
        "subject",
        "upload",
        "address"
      ],
      "line": 13,
      "id": "demo-site;test-scenario;;1"
    },
    {
      "cells": [
        "Jyoti",
        "Test@12345",
        "Jyoti",
        "Palariya",
        "jy@gmail.com",
        "\u00279829414644\u0027",
        "CS",
        "C://Users//jyoti//Downloads/IMG-20200821-WA0014.jpg",
        "Nainital"
      ],
      "line": 14,
      "id": "demo-site;test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Test Scenario",
  "description": "",
  "id": "demo-site;test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title is ToolsQA",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User enters \"Jyoti\" and \"Test@12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User reaches to Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Form link then New form link",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User entering \"Jyoti\" and \"Palariya\" and \"jy@gmail.com\"  and \"\u00279829414644\u0027\" and \"CS\" and \"C://Users//jyoti//Downloads/IMG-20200821-WA0014.jpg\" and \"Nainital\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.User_is_already_on_login_page()"
});
formatter.result({
  "duration": 10536704000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_is_ToolsQA()"
});
formatter.result({
  "duration": 24551700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jyoti",
      "offset": 13
    },
    {
      "val": "Test@12345",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 516543500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 135153400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.User_reaches_to_Home_Page()"
});
formatter.result({
  "duration": 12569700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.User_clicks_on_Form_link_then_New_form_link()"
});
formatter.result({
  "duration": 417710900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jyoti",
      "offset": 15
    },
    {
      "val": "Palariya",
      "offset": 27
    },
    {
      "val": "jy@gmail.com",
      "offset": 42
    },
    {
      "val": "\u00279829414644\u0027",
      "offset": 62
    },
    {
      "val": "CS",
      "offset": 81
    },
    {
      "val": "C://Users//jyoti//Downloads/IMG-20200821-WA0014.jpg",
      "offset": 90
    },
    {
      "val": "Nainital",
      "offset": 148
    }
  ],
  "location": "LoginStepDefinition.User_entering_firstName_and_lastName_and_email_and_mobile_and_subject_and_upload_and_address(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1159432000,
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: The result of the xpath expression \"//*[@id\u003d\"hobbiesWrapper\"]/div[2]/div[1]/label/text()\" is: [object Text]. It should be an element.\n  (Session info: chrome\u003d90.0.4430.93)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DELL\u0027, ip: \u0027172.30.16.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\jyoti\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:12017}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 52a843a8fcce843e5c44738b2f4500fa\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"hobbiesWrapper\"]/div[2]/div[1]/label/text()}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinition.LoginStepDefinition.User_entering_firstName_and_lastName_and_email_and_mobile_and_subject_and_upload_and_address(LoginStepDefinition.java:76)\r\n\tat ✽.Then User entering \"Jyoti\" and \"Palariya\" and \"jy@gmail.com\"  and \"\u00279829414644\u0027\" and \"CS\" and \"C://Users//jyoti//Downloads/IMG-20200821-WA0014.jpg\" and \"Nainital\"(D:/eclipseworkspace/phpcucumber/src/main/java/feature/contacts.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.Then_User_clicks_on_Submit_button()"
});
formatter.result({
  "status": "skipped"
});
});