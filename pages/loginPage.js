/*
let nameInput,
  greeting;

module.exports = {
  init: () => {
    browser.waitForAngularEnabled(false);
    userName = element(by.id('identifierId'));
    nextButton = element(by.id('identifierNext'));
    userPassword = element(by.name("password"));
    passwordNextButton = element(by.id('passwordNext'));
  },
  get: (string) => {
    return browser.get('https://credenciado5.qa.amil.com.br/login');
  },
  clickNext: () => {
    return nextButton.click();
  },
  clickUserLogout: () => {
    return userLogout.click();
  },
  clickPasswordNext: () => {
    return passwordNextButton.click();
  },
  getPasswordField: () => {
    return userPassword;
  },
  getUserNameField: () => {
    return userName;
  },
  setUserName: (user) => {
    return userName.sendKeys(user);
  },
  setPassword: (password) => {
    return userPassword.sendKeys(password);
  },
  getGreetingText: () => {
    return greeting.getText();
  }
}
*/