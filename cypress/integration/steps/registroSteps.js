/// <reference types = "cypress"/>

import BasePage from "../pages/BasePage";
import {
    faker
} from '@faker-js/faker';

import RegistroPage, {

    msgEmailInvalido,

} from "../pages/RegistroPage";


const registroPage = new RegistroPage;

const basePage = new BasePage;

context('Registro', () => {
    describe('Cenários Positivos', () => {
        it('Validar novo registro', () => {
            cy.allure()
                .epic('Teste de Registro')
                .feature('Cenários Positivos')
                .story('Fazer registro com dados válidos')
                .owner('Eduardo Queiroz');
            let url = cy.url();
            //Gerando dados
            let novoNome = faker.name.fullName();
            let novoEmail = faker.internet.email();
            let novaSenha = faker.internet.password();
            registroPage.fazerRegistro(novoNome, novoEmail, novaSenha)
            basePage.tempo(1000)
            basePage.validarUrlDiferente(url)
        });
    })

    describe('Cenários Negativos', () => { 
        it('Validar tentar registrar com email inválido', () => {
            cy.allure()
            .epic('Teste de Registro')
            .feature('Cenários Negativos')
            story('Fazer registro com email inválido')
            .owner('Eduardo Queiroz');
            let novoNome = faker.name.fullName();
            let novaSenha = faker.internet.password();
            let novoEmail = "emailInvalido"

            registroPage.fazerRegistro(novoNome, novoEmail, novaSenha);

            basePage.tempo(1000)
            basePage.validarText(msgEmailInvalido, "Endereço de e-mail ou número de telefone celular errado ou inválido. Corrija e tente novamente.")
        });

        it('Validar tentar fazer login com número de celular errado', () => {
            cy.allure()
            .epic('Teste de Registro')
            .feature('Cenários Negativos')
            story('Fazer registro com numero de celular inválido')
            .owner('Eduardo Queiroz');
            let url = cy.url();
            let novoNome = faker.name.fullName();
            let novaSenha = faker.internet.password();
            let novoEmail = "9";
            registroPage.fazerRegistro(novoNome, novoEmail, novaSenha);
            basePage.tempo(100);
            basePage.validarUrlDiferente(url);
        });
    })




})