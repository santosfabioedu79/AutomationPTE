let nameInput,
    greeting;
//var EC = protractor.ExpectedConditions;

    module.exports = {
        init: () => {
        
        browser.waitForAngularEnabled(false); 
        //btnExit = element(by.css('#finalizar-walktour'));
        //lbLogin = element(by.css('#finalizar-walktour'));
        login = element(by.id('codigo')); // localiza input com ID de Usuário
        senha = element(by.id('senha')); // Localizando input de ID Senha
        btnEntrar = element(by.className('proximo')); // localização botão com texto de Entrar
        homeTitle = element(by.className('wrapper principal'));
              
        },
        get: () => {
            return browser.get('http://corretor2.qa.amil.com.br/login');
        },

          clickBtnEntrar: () => {
            return btnEntrar.click();
          },
          
          //clickBtnExit: () => {return bntExit},
          //getBtnExit: () => {return lbLogin},
          
          getSenha: () => {
            //return senha;
            return senha.sendKeys('1234qwer');
          },
          getLogin: () => {
            //return login;
            return login.sendKeys('04201401820');
          },

          setLogin: (user) => {
            return login.sendKeys(user);
          },
          setSenha: (password) => {
            return senha.sendKeys(password);
          },

          getTitleText: () => {
            return homeTitle.getText();
          }
        }