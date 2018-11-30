/*
let loginSpecPage = require('../pages/loginPage.js');

let chai = require('chai');
let protractor = require('protractor')
let EC = protractor.ExpectedConditions;
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;

Before(function(){
    loginSpecPage.init();
})

Given('The user go to {string}', async function(url) {
    loginSpecPage.get(url);
});

When('The user {string} and password {string} attempt to login', {timeout: 30 * 1000}, async function (username, password) {
    loginSpecPage.setUserName(username);
    await loginSpecPage.clickNext()
    await browser.wait(EC.visibilityOf(loginSpecPage.getPasswordField()), 10000);
    await loginSpecPage.setPassword(password);
    await loginSpecPage.clickPasswordNext()
});

Then('Successfully loged into {string} inbox', {timeout: 30 * 1000}, async function (string) {
    await expect(browser.wait(EC.titleContains(string), 20000, "wait for inbox"), 15000).to.eventually.equal(true);        
});
*/