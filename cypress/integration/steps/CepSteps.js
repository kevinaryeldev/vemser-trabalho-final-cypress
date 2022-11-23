/// <reference types = "cypress"/>

import BasePage from "../pages/BasePage";
import HomePage, {
    cepInserido,
    msgCepIncorreto
} from "../pages/HomePage";
const homepage = new HomePage;
const basePage = new BasePage;

context('CEP', () => {

    it('Validar buscar cep correto', () => {
        // cy.clearCookies();
        cy.clearLocalStorage();
        homepage.buscarCep("41701", "005");
        basePage.validarText(cepInserido, "41701005")
    })

    it('Validar buscar cep inexistente', () => {
        // cy.clearCookies()
        cy.clearLocalStorage();
        homepage.buscarCep("0001", "001");
        basePage.validarText(msgCepIncorreto, "Insira um CEP válido")
    });

    it('Validar buscar cep com texto', () => {
        cy.clearLocalStorage();
        homepage.buscarCep("text", "txt");
        basePage.validarText(msgCepIncorreto, "Insira um CEP válido")
    });

})