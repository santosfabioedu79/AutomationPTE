// homepage.spec.js

let loginCredenciado = require('../page_objects/loginCredenciado.po');
let chai = require('chai');
let protractor = require('protractor')
let EC = protractor.ExpectedConditions;
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;

  Before(function(){
   loginCredenciado.init();
  });

  Given('acesso ao portal de credenciado',{timeout: 30 * 15000}, async function () {
    await browser.get('https://credenciado5.qa.amil.com.br');
    await browser.sleep(9000);    
   //loginCredenciado.get();
   // browser.wait(EC.presenceOf(element(by.id('login-usuario'))));
  });

  Given('feche o pop-up',{timeout: 30 * 5000}, async function () {
    await browser.wait(EC.visibilityOf(loginCredenciado.getBtnExit()), 3000);
    await loginCredenciado.getBtnExit().click();
  });

  Given('digite o código do prestador',{timeout: 30 * 15000}, async  function (){
    await browser.sleep(3000);
    await loginCredenciado.getLogin();
    //await loginCredenciado.setLogin('12484296');
  });
 

  Given('digite a senha do prestador',{timeout: 30 * 15000}, async  function () {
    await loginCredenciado.getSenha();
    // loginCredenciado.setSenha('qwer1234');
  });

  Given('clique no botão Pesquisar',{timeout: 30 * 15000}, async  function () {
    await loginCredenciado.clickBtnEntrar();
  });


  Then('o acesso deve ser concluido',{timeout: 30 * 15000}, async function () {
    await expect(browser.wait(EC.presenceOf(element(by.id('logo-amil-institucional')))));
    await browser.sleep(9000);
  });
  