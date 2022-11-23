import BasePage from "./BasePage"
import { faker } from '@faker-js/faker';
const inputBarraPesquisa = '#twotabsearchtextbox'
const dropBoxBarraPesquisa = '#searchDropdownBox'
//options de 2 a 20 na minha tela
const btnBarraPesquisar = '#nav-search-submit-button'

const basePage = new BasePage()
export default class HomePage {
    barraPesquisaPreencherInput(texto){
        basePage.preencherInput(inputBarraPesquisa,texto)
    }
    barraPesquisaDropboxSelecionarCategoria(){
        basePage.select(dropBoxBarraPesquisa,"search-alias=automotive")
    }
    barraPesquisaClicarBtnPesquisar(){
        basePage.click(btnBarraPesquisar)
    }
}