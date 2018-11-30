let nameInput,
    greeting;
//var EC = protractor.ExpectedConditions;

    module.exports = {
        init: () => {
        
        browser.waitForAngularEnabled(false); 
        btnExit = element(by.css('#finalizar-walktour'));
        lbLogin = element(by.css('#finalizar-walktour'));
        login = element(by.id('login-usuario')); // localiza input com ID de Login
        senha = element(by.id('login-senha')); // Localizando input de ID Password
        btnEntrar = element(by.css('.btn-login')); // localização botão com texto de Entrar
              
        },
        get: () => {
            return browser.get('https://credenciado5.qa.amil.com.br/login');
        },

          clickBtnEntrar: () => {
            return btnEntrar.click();
          },
          
          clickBtnExit: () => {return bntExit},
          getBtnExit: () => {return lbLogin},
          
          getSenha: () => {
            //return senha;
            return senha.sendKeys('qwer1234');
          },
          getLogin: () => {
            //return login;
            return login.sendKeys('12484296');
          },

          setLogin: (user) => {
            return login.sendKeys(user);
          },
          setSenha: (password) => {
            return senha.sendKeys(password);
          },

          getGreetingText: () => {
            return greeting.getText();
          }
        }