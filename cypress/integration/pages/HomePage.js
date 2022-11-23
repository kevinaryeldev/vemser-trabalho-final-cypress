import BasePage from "./BasePage"
const inputBarraPesquisa = '#twotabsearchtextbox'
const dropBoxBarraPesquisa = '#searchDropdownBox'
const btnBarraPesquisar = '#nav-search-submit-button'
const btnLoginPage = 'div#nav-tools>[data-nav-role="signin"]'
const msgBoasVindas = '.nav-line-1-container>span'
let selEnderoBtn = "#nav-global-location-popover-link";
let cepPrimeiroCampo = "input.a-declarative.a-span7";
let cepSegundoCampo = "input.a-declarative.a-span4";
let confirmarBtn = "#GLUXZipUpdate > span > input";
export let cepInserido = "#glow-ingress-line2";
export let msgCepIncorreto = "#GLUXZipError > div > div > div";
const basePage = new BasePage()
export default class HomePage {
    clickarBtnIrParaLogin(){
        basePage.click(btnLoginPage)
    }
    pesquisarItemAleatorio(texto){
        basePage.preencherInput(inputBarraPesquisa,texto)
        basePage.select(dropBoxBarraPesquisa,"search-alias=automotive")
        basePage.click(btnBarraPesquisar)
    }
    barraPesquisaPreencherInput(texto){
        basePage.preencherInput(inputBarraPesquisa,texto)
    }
    barraPesquisaDropboxSelecionarCategoria(){
        basePage.select(dropBoxBarraPesquisa,"search-alias=automotive")
    }
    barraPesquisaClicarBtnPesquisar(){
        basePage.click(btnBarraPesquisar)
    }
    buscarCep(primeiroCampo, segundoCampo) {
        cy.reload(true);
        basePage.tempo(2000)
        basePage.click(selEnderoBtn)
        basePage.preencherInput(cepPrimeiroCampo, primeiroCampo)
        basePage.preencherInput(cepSegundoCampo, segundoCampo);
        basePage.click(confirmarBtn)
    }
    validarEstarLogado(){
        basePage.validarText(msgBoasVindas,'Olá')
    }
}