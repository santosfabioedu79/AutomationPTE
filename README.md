# E2E test based on CucumberJS and Protractor

This is an E2E test for Gmail using Cucumber and Protractor. This tools were implemented togheter to provide a better comprehenson of what the test do.

While Cucumber js provides a better comprehension in human language. Protrator do all the work from behind.

### Actions supported
* Login
* Create Email
* Add CC and BCC receivers
* Send Email
* Access Email (verify the email sent)
* Select the firt elemen on inbox
* [X] Delete selected mail - unable the delete due some conflict with other element in the dom (See bugs/docs/delete-bug.docx)
## Getting Started

You will have available this project to run on your local machine for development and testing purposes. 
### Prerequisites
* Install [Node.js](https://nodejs.org/) and npm (comes with Node.js)
* Install Protractor globally: 
```
npm install -g protractor
```
This will install two command line tools, protractor and webdriver-manager. Try running protractor --version to make sure it's working.

* Install and update the helper that download the browsers and instance of Selenium Server: 
```
webdriver-manager update
```
* Start the server: 
```
webdriver-manager start.
```

#### Install packages with npm
```
npm install
```

#### Install packages manually 

* Install cucumber 
```
npm install --save-dev cucumber
```
* install protractor-cucumber-framework
```
npm install --save-dev protractor-cucumber-framework
```
* Install chai
```
npm install chai
npm install chai-as-promised
```
If you want to run the test you will need to start the webdriver-manager server.


### Understanding the code

####Protractor configuration

This configuration is required to provide support between both frameworks
```js
exports.config = {
  capabilities: {
    ignoreSynchronization: true, //Since Gmail is not an angular app, This is required to remove the sync with angular app
    browserName: 'chrome', // By default use chrome
    shardTestFiles: true //share test files 
  },

  allScriptsTimeout: 10000, //base timeouts
  baseUrl:'https://www.gmail.com', //If url is not specified, the test will run here
  framework: 'custom',  // set to "custom" instead of cucumber.
  frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file

  specs: [
    'e2e/features/*.feature'     // cucumber feature files
  ],
  //If its required restart the browser between each run with the lin below:
  // restartBrowserBetweenTests: true,

  // cucumber command line options
  cucumberOpts: {
    require: [
      'e2e/specs/*.js', // require step definition files before executing features 
    ],  
    tags: [],                      // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    strict: true,                  // <boolean> fail if there are any undefined or pending steps
    'dry-run': false,              // <boolean> invoke formatters without executing steps
    compiler: [],                   // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
  },

  //Cucumber Methods
  onPrepare: function () {
    const {Given, Then, When, Before} = require('cucumber');
    global.Given = Given;
    global.When = When;
    global.Then = Then;
    global.Before = Before;
  }
};
```

#### Project tree

```
|test
||-e2e
|||-features
||||-features
|||-pages
||||-pages modules
|||-specs 
||||-specs code
||-node_modules
|||-A loth of dependencies :)
||-package.json
||-protractor.conf.js 
```


### what are the features?[Link](https://www.tutorialspoint.com/cucumber/cucumber_features.htm)
### What are the spec files?[Link](https://angular.io/guide/testing#test-file-name-and-location)
### What are the page files?
This are our abstraction of the DOM elements on the web application.

## Running the tests

Run the server on a console with Node.js
```
webdriver-manager start
```
Run the actual test from the main folder:
```
protractor protractor.conf.js
```

### Break down into end to end tests

If everything goes well you will see something like this

```
➜  test1 git:(master) protractor protractor.conf.js
[11:02:35] I/launcher - Running 1 instances of WebDriver
[11:02:35] I/local - Starting selenium standalone server...
[11:02:36] I/local - Selenium standalone server started at http://192.168.43.232:53743/wd/hub
(node:9500) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
.......................

3 scenarios (3 passed)
11 steps (11 passed)
0m20.443s
[11:02:58] I/local - Shutting down selenium standalone server.
[11:02:58] I/launcher - 0 instance(s) of WebDriver still running
[11:02:58] I/launcher - chrome #01 passed
 
```

If The test fails you will see the features methods working and guiding you to see the actual error.
```
➜  test1 git:(master) protractor protractor.conf.js
[11:08:19] I/launcher - Running 1 instances of WebDriver
[11:08:19] I/local - Starting selenium standalone server...
[11:08:19] I/local - Selenium standalone server started at http://192.168.43.232:45921/wd/hub
(node:10283) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
.....F.................

Failures:

1) Scenario: Log In into test account # e2e/features/spec.feature:2
   ✔ Before # e2e/specs/login.spec.js:10
   ✔ Before # e2e/specs/logout.spec.js:10
   ✔ Before # e2e/specs/sendEmail.spec.js:10
   ✔ Given The user go to "https://www.gmail.com" # e2e/specs/login.spec.js:14
   ✔ When The user "qervy.test.e2e" and password "r6KoGcBpr98j" attempt to login # e2e/specs/login.spec.js:18
   ✖ Then Successfully loged into "qervy.test.e2e" inbox # e2e/specs/login.spec.js:26
       AssertionError: 15000: expected true to equal false
           + expected - actual

           -true
           +false
       
           at getBasePromise.then.then.newArgs (/home/jorge/qrvy/test1/node_modules/chai-as-promised/lib/chai-as-promised.js:302:22)
           at ManagedPromise.invokeCallback_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)
           at TaskQueue.execute_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)
           at TaskQueue.executeNext_ (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)
           at asyncRun (/usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)
           at /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7
           at process._tickCallback (internal/process/next_tick.js:68:7)
   ✔ After # node_modules/protractor-cucumber-framework/lib/resultsCapturer.js:26

3 scenarios (1 failed, 2 passed)
11 steps (1 failed, 10 passed)
0m21.195s
[11:08:42] I/local - Shutting down selenium standalone server.
[11:08:42] I/launcher - 0 instance(s) of WebDriver still running
[11:08:42] I/launcher - chrome #01 failed 1 test(s)
[11:08:42] I/launcher - overall: 1 failed spec(s)
[11:08:42] E/launcher - Process exited with error code 1

```

## Built With

* [Protractos](https://www.protractortest.org/) - End to End test Framework
* [Cucumber JS](https://docs.cucumber.io/installation/javascript/) - Behaviour-Driven Development
* [Chai](https://www.chaijs.com/plugins/chai-as-promised/) - Fluent Language For Asserting


## Authors

* **Jorge Franco** 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
* Inspiration :  [manoj - AssertSelenium](http://www.assertselenium.com/bdd/e2e-testing-with-protractor-cucumber-js/)

