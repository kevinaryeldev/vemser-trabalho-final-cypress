import BasePage from "./BasePage";
const basePage = new BasePage()
const inputLoginEmail = "#ap_email"
const inputLoginSenha = "#ap_password"
const btnLoginContinuar = "#continue"
const btnLoginSubmit = "#signInSubmit"
const textErrorMessage = ".a-alert-heading"
export let criarContaBtn = "#createAccountSubmit";

export default class LoginPage{
    preencherInputLoginEmail(email){
        basePage.preencherInput(inputLoginEmail,email)
    }
    clicarBtnLoginContinuar(){
        basePage.click(btnLoginContinuar)
    }
    preencherInputLoginSenha(senha){
        basePage.preencherInput(inputLoginSenha,senha)
    }
    clicarBtnLoginSubmit(){
        basePage.click(btnLoginSubmit)
    }
    validarMensagemErro(){
        basePage.validarText(textErrorMessage,'Houve um problema')
    }
}