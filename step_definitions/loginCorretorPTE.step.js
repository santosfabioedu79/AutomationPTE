//loginCorretorPTE.step.js

let loginCorretorPTE = require('../page_objects/loginCorretorPTE.po');
let chai = require('chai');
let protractor = require('protractor')
let EC = protractor.ExpectedConditions;
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;

  Before(function(){
    loginCorretorPTE.init();
  });

  Given('Acesso ao Portal PTE',{timeout: 30 * 15000}, async function () {
    console.log('Abertura do browser');
    await browser.get('http://corretor2.qa.amil.com.br');
    //await browser.sleep(9000);    
  });

  Given('preenchimento do login', {timeout: 30 * 15000}, async function (){
    browser.wait(EC.presenceOf(element(by.id('codigo'))));
    await loginCorretorPTE.getLogin();
  })

  Given('preenchimento da senha', {timeout: 30 * 15000}, async function (){
    await loginCorretorPTE.getSenha();
  })

  Given('clicar no botão Entrar', {timeout: 30 * 15000}, async function (){
    await loginCorretorPTE.clickBtnEntrar();
  })

  Then ('o acesso deverá ser realizado', {timeout: 30 * 15000}, async function (){
    await expect(browser.wait(EC.presenceOf(element(by.className('wrapper principal')))));
  })

  Given('o nome do Nome do Corretor deverá ser exibido', {timeout: 30 * 15000}, async function (){
    await expect(browser.wait(EC.presenceOf(element(by.id('formLogin')))));
  })