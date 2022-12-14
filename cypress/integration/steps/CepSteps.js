/// <reference types = "cypress"/>

import BasePage from "../pages/BasePage";
import HomePage, {
    cepInserido,
    msgCepIncorreto
} from "../pages/HomePage";
const homepage = new HomePage;
const basePage = new BasePage;

context('CEP', () => {

    describe('Cenários Positivos',()=>{
        it('Validar buscar cep correto', () => {
            cy.allure()
                .epic('Teste de CEP')
                .feature('Cenários Positivos')
                .story('Buscar CEP Válido')
                .owner('Eduardo Queiroz')
            cy.clearLocalStorage();
            homepage.buscarCep("41701", "005");
            basePage.validarText(cepInserido, "41701005")
        })
    })

    describe('Cenários Negativos',()=>{
        it('Validar buscar cep inexistente', () => {            
            cy.allure()
                .epic('Teste de CEP')
                .feature('Cenários Negativos')
                .story('Buscar CEP numérico inválido')
                .owner('Eduardo Queiroz');
            cy.clearLocalStorage();
            homepage.buscarCep("0001", "001");
            basePage.validarText(msgCepIncorreto, "Insira um CEP válido")
        });

        it('Validar buscar cep com texto', () => {
            cy.allure()
                .epic('Teste de CEP')
                .feature('Cenários Negativos')
                .story('Buscar CEP com texto')
                .owner('Eduardo Queiroz');
            cy.clearLocalStorage();
            homepage.buscarCep("text", "txt");
            basePage.validarText(msgCepIncorreto, "Insira um CEP válido")
        });
    })
})