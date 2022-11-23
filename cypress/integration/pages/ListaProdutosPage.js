import BasePage from "./BasePage"
const basePage = new BasePage()
const textoResultadoPesquisaComResultado = '[data-component-type="s-messaging-widget-results-header"]>div>div>span'
const textoResultadoPesquisaSemResultadoGeral = 'div.s-result-list.s-search-results > div.s-result-item > div > div > div > div:nth-child(1) > span:nth-child(1)'
const textoResultadoPesquisaSemResultadoNaCategoria = 'div.s-main-slot.s-result-list.s-search-results> div:nth-child(1) > div > div > div > h3 > span'
const inputFiltroPrecoMin = "#low-price"
const inputFiltroPrecoMax = "#high-price"
const btnFiltrarPreco = "#a-autoid-1>span>input"

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
    filtroPrecoInserirValores(valorMin,valorMax){
        basePage.preencherInput(inputFiltroPrecoMin,valorMin)
        basePage.preencherInput(inputFiltroPrecoMax,valorMax)
    }
    filtroPrecoClicarBtnIr(){
        basePage.click(btnFiltrarPreco)
    }
    validarUrlPaginaContem(texto){
        basePage.validarUrl(texto)
    }
    validarUrlPaginaNaoContem(texto){
        basePage.validarNegativaUrl(texto)
    }

}