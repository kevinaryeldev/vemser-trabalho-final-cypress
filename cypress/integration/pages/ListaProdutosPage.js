import BasePage from "./BasePage"
const basePage = new BasePage()
const textoResultadoPesquisaComResultado = '[data-component-type="s-messaging-widget-results-header"]>div>div>span'

const textoResultadoPesquisaSemResultadoGeral = 'div.s-result-list.s-search-results > div.s-result-item > div > div > div > div:nth-child(1) > span:nth-child(1)'
const textoResultadoPesquisaSemResultadoNaCategoria = 'div.s-main-slot.s-result-list.s-search-results> div:nth-child(1) > div > div > div > h3 > span'


export default class ListaProdutosPage{
    validarTextoPesquisaComItens(){
        basePage.validarText(textoResultadoPesquisaComResultado,"RESULTADOS")
    }
    validarTextoPesquisaVazia(){
        try{
            basePage.validarText(textoResultadoPesquisaSemResultadoGeral,"Nenhum")
        }
        catch{
            basePage.validarText(textoResultadoPesquisaSemResultadoNaCategoria,'Nenhum')
        }
    }

}