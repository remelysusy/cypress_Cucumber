/// <reference types="cypress" />

import { contains } from 'cypress/types/jquery'
import LoginElements from '../elements/LoginElements'
const Url = Cypress.config("baseUrl")
const usuario = Cypress.config("user")
const senha = Cypress.config("password")
const title = Cypress.config("titleLogin")

class LoginPage {

    //Acessa o site que será testado
    acessarSite() {
        cy.visit(Url)
    }

    //Confirmação de que está na tela de login

    telaLogin() {
        cy.get(title);
    }


    //Clicar campo usuario
    clicarCampoUser() {
        cy.get(LoginElements.cliqueUser).click

    }
    //Receber Usuário
    campoUser() {
        cy.get(usuario)

    }

    //Clicar campo usuario
    clicarCampoPassword() {
        cy.get(LoginElements.cliquePassword).click

    }

    //Receber Senha
    campoPassword() {
        cy.get(senha)
    }

    //Clica no botão que Entrar no sistema
    botaologarSistema() {
        cy.get(LoginElements.botaoLogar()).click()
    }

    resultLogin() {
        cy.get(LoginElements.messageSucess()).contains('Olá bem vindo de volta');

    }

    // Verifica se o botão tem o texto "Esqueceu sua senha?"
    // visualizarBotaoRecuperarSenha() {
    // cy.get(LoginElements.botaoEsqueciMinhaSenha()).should('contain', 'Esqueci minha senha')
    // }
}

export default LoginPage