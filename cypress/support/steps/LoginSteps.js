/// <reference types="cypress" />

import LoginPage from "../pageobjects/LoginPage";
const loginPage = new LoginPage()

Given(/^que eu acesso o Kuru$/, () => {
	loginPage.acessarSite();
	
});


Then(/^acesso a tela de Login$/, () => {
	loginPage.telaLogin();
});


When(/^informo o usuario User e a senha ###$/, () => {
	loginPage.clicarCampoUser();
	loginPage.campoUser();
	loginPage.clicarCampoSenha();
	loginPage.campoPassword();
});

When(/^clicar em Logar$/, () => {
	loginPage.botaologarSistema();
});


Then(/^devo obter o resultado "([^"]*)"$/, () => {
	loginPage.resultLogin();
});
