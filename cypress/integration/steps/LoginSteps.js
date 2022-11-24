/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import HomePage from "../pages/HomePage"
import LoginPage from '../pages/LoginPage';

const homePage = new HomePage()
const loginPage = new LoginPage()

context('Testes Login',()=>{
    describe('Cenários Positivos',()=>{
        it("Testar login válido",()=>{
            cy.allure()
            .epic('Teste de Login')
            .feature('Cenários Positivos')
            .story('Fazer login com dados válidos')
            .owner('Kevin Aryel');
            homePage.clickarBtnIrParaLogin()
            loginPage.preencherInputLoginEmail(Cypress.env('USERNAME'))
            loginPage.clicarBtnLoginContinuar()
            loginPage.preencherInputLoginSenha(Cypress.env('PASSWORD'))
            loginPage.clicarBtnLoginSubmit()
            homePage.validarEstarLogado()
        })
    })
    describe('Cenários Negativos',()=>{
        it('Testar login email inválido',()=>{
            cy.allure()
            .epic('Teste de Login')
            .feature('Cenários Negativos')
            .story('Fazer login com email inválido')
            .owner('Kevin Aryel');
            homePage.clickarBtnIrParaLogin()
            loginPage.preencherInputLoginEmail(faker.name.fullName())
            loginPage.clicarBtnLoginContinuar()
            loginPage.validarMensagemErro()
        })
        it('Testar login com senha invalida',()=>{
            cy.allure()
            .epic('Teste de Login')
            .feature('Cenários Negativos')
            .story('Fazer login com senha inválida')
            .owner('Kevin Aryel');
            homePage.clickarBtnIrParaLogin()
            loginPage.preencherInputLoginEmail(Cypress.env('USERNAME'))
            loginPage.clicarBtnLoginContinuar()
            loginPage.preencherInputLoginSenha('hello123')
            loginPage.clicarBtnLoginSubmit()
            loginPage.validarMensagemErro()
        })
    })
})