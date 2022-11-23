/// <reference types = "cypress"/>

import BasePage from "../pages/BasePage";
import {
    faker
} from '@faker-js/faker';
import LoginPage, {
    criarContaBtn
} from "../pages/LoginPage";
import HomePage, {
    fazerLoginBtn
} from "../pages/HomePage";
import RegistroPage, {
    msgConfirmEmail,
    msgEmailInvalido
} from "../pages/RegistroPage";

const homepage = new HomePage;

const registroPage = new RegistroPage;

const basePage = new BasePage;
const loginPage = new LoginPage;

context('Registro', () => {
    it('Validar novo registro', () => {
        //Gerando dados
        let novoNome = faker.name.fullName();
        let novoEmail = faker.internet.email();
        let novaSenha = faker.internet.password();

        registroPage.fazerRegistro(novoNome, novoEmail, novaSenha)

        basePage.validarText(msgConfirmEmail, "Verificar o endereço de e-mail")
        // if ((basePage.validarText(msgConfirmEmail, "Verificar o endereço de e-mail")) ||
        //     (basePage.validarText())) {
        //     return true
        // }

    });

    it('Validar tentar registrar com email inválido', () => {
        let novoNome = faker.name.fullName();
        let novaSenha = faker.internet.password();
        let novoEmail = "emailInvalido"

        registroPage.fazerRegistro(novoNome, novoEmail, novaSenha);

        basePage.tempo(1000)
        basePage.validarText(msgEmailInvalido, "Endereço de e - mail ou número de telefone celular errado ou inválido.Corrija e tente novamente.")
    });
})