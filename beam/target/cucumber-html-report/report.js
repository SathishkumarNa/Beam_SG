$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginToGithub.feature");
formatter.feature({
  "line": 1,
  "name": "Github Launch and search the repository",
  "description": "",
  "id": "github-launch-and-search-the-repository",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Launch the Github application and verify the repository",
  "description": "",
  "id": "github-launch-and-search-the-repository;launch-the-github-application-and-verify-the-repository",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@GITHUB_Signin"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I open the URL in browse \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the \"\u003cUserName\u003e\" and \"\u003cPassword\u003e\" credentials for \"\u003cTestcase\u003e\" testcase",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I search the repository name \"\u003cRepositoryName\u003e\" for \"\u003cTestcase\u003e\" in Github",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "github-launch-and-search-the-repository;launch-the-github-application-and-verify-the-repository;",
  "rows": [
    {
      "cells": [
        "Testcase",
        "UserName",
        "Password",
        "Browser",
        "RepositoryName"
      ],
      "line": 11,
      "id": "github-launch-and-search-the-repository;launch-the-github-application-and-verify-the-repository;;1"
    },
    {
      "cells": [
        "TC001",
        "nsathishkumar.a@gmail.com",
        "nagarajan007!",
        "chrome",
        "test_Beam"
      ],
      "line": 12,
      "id": "github-launch-and-search-the-repository;launch-the-github-application-and-verify-the-repository;;2"
    },
    {
      "cells": [
        "TC002",
        "nsathishkumar.a@gmail.com",
        "nagarajan007!",
        "firefox",
        "test_Beam"
      ],
      "line": 13,
      "id": "github-launch-and-search-the-repository;launch-the-github-application-and-verify-the-repository;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Launch the Github application and verify the repository",
  "description": "",
  "id": "github-launch-and-search-the-repository;launch-the-github-application-and-verify-the-repository;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@GITHUB_Signin"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I open the URL in browse \"chrome\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the \"nsathishkumar.a@gmail.com\" and \"nagarajan007!\" credentials for \"TC001\" testcase",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I search the repository name \"test_Beam\" for \"TC001\" in Github",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 26
    }
  ],
  "location": "GitHub_steps.i_open_the_URL_in_browse(String)"
});
formatter.result({
  "duration": 13823025800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nsathishkumar.a@gmail.com",
      "offset": 13
    },
    {
      "val": "nagarajan007!",
      "offset": 45
    },
    {
      "val": "TC001",
      "offset": 77
    }
  ],
  "location": "GitHub_steps.i_enter_the_and(String,String,String)"
});
formatter.result({
  "duration": 2570270301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test_Beam",
      "offset": 30
    },
    {
      "val": "TC001",
      "offset": 46
    }
  ],
  "location": "GitHub_steps.i_search_the_repository_name_for_in_Github(String,String)"
});
formatter.result({
  "duration": 15488749001,
  "status": "passed"
});
formatter.match({
  "location": "GitHub_steps.i_close_the_browser()"
});
formatter.result({
  "duration": 3613699400,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Launch the Github application and verify the repository",
  "description": "",
  "id": "github-launch-and-search-the-repository;launch-the-github-application-and-verify-the-repository;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@GITHUB_Signin"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I open the URL in browse \"firefox\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the \"nsathishkumar.a@gmail.com\" and \"nagarajan007!\" credentials for \"TC002\" testcase",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I search the repository name \"test_Beam\" for \"TC002\" in Github",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 26
    }
  ],
  "location": "GitHub_steps.i_open_the_URL_in_browse(String)"
});
formatter.result({
  "duration": 15396428500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nsathishkumar.a@gmail.com",
      "offset": 13
    },
    {
      "val": "nagarajan007!",
      "offset": 45
    },
    {
      "val": "TC002",
      "offset": 77
    }
  ],
  "location": "GitHub_steps.i_enter_the_and(String,String,String)"
});
formatter.result({
  "duration": 2068273999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test_Beam",
      "offset": 30
    },
    {
      "val": "TC002",
      "offset": 46
    }
  ],
  "location": "GitHub_steps.i_search_the_repository_name_for_in_Github(String,String)"
});
formatter.result({
  "duration": 26662468600,
  "status": "passed"
});
formatter.match({
  "location": "GitHub_steps.i_close_the_browser()"
});
formatter.result({
  "duration": 6042871400,
  "status": "passed"
});
});