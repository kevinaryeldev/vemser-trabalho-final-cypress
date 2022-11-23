import BasePage from "./BasePage";
import {
    fazerLoginBtn
} from "./HomePage";
import {
    criarContaBtn
} from "./LoginPage";

let nome = "#ap_customer_name";
let email = "#ap_email"
let senha = "#ap_password"
let confirmarSenha = "#ap_password_check"
let continuarBtn = "#continue"

export let msgEmailInvalido = "#auth-email-invalid-claim-alert>div>div";
export let msgEmailUtilizado = "	    "

export let msgConfirmEmail = "#verification-code-form > div:nth-child(10) > div.a-row.a-spacing-small > h1";

const basePage = new BasePage

export default class RegistroPage {
    fazerRegistro(novoNome, novoEmail, novaSenha) {
        cy.visit("https://www.amazon.com.br/login")
        basePage.click(criarContaBtn);

        cy.reload(true)

        basePage.preencherInput(nome, novoNome);
        basePage.preencherInput(email, novoEmail);
        basePage.preencherInput(senha, novaSenha);
        basePage.preencherInput(confirmarSenha, novaSenha)

        basePage.click(continuarBtn)
    }
}