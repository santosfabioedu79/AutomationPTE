#languange:en

Feature: Portal PTE
Scenario: 001 Validar login do Corretor Portal PTE
Given Acesso ao Portal PTE
And preenchimento do login
And preenchimento da senha
When clicar no botão Entrar
Then o acesso deverá ser realizado
And o nome do Nome do Corretor deverá ser exibido