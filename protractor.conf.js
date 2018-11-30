exports.config = {
  capabilities: {
    ignoreSynchronization: true, //Since Gmail is not an angular app, This is required to remove the sync with angular app
    browserName: 'chrome', // By default use chrome
    shardTestFiles: true //share test files 
  },

  allScriptsTimeout: 10000, //base timeouts
  baseUrl:'http://corretor2.qa.amil.com.br/', //If url is not specified, the test will run here
  framework: 'custom',  // set to "custom" instead of cucumber.
  frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file

  specs: [
    './features/*.feature'     // cucumber feature filesp
  ],
  //If its required restart the browser between each run with the lin below:
  // restartBrowserBetweenTests: true,

  // cucumber command line options
  cucumberOpts: {
    require: [
      './step_definitions/*.step.js', // require step definition files before executing features 
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
    browser.sleep('9000');
  }
};