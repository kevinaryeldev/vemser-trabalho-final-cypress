/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import HomePage from "../pages/HomePage"
import ListaProdutosPage from "../pages/ListaProdutosPage"

const homePage = new HomePage()
const listaProdutosPage = new ListaProdutosPage()
context('Testes Barra de Pesquisa',()=>{
    describe('Cenários Positivos',()=>{
        it("Testar Pesquisa válida",()=>{
            homePage.barraPesquisaPreencherInput(faker.color.human())
            homePage.barraPesquisaDropboxSelecionarCategoria()
            homePage.barraPesquisaClicarBtnPesquisar()
            listaProdutosPage.validarTextoPesquisaComItens()
        })
    })
    describe('Cenários Negativos',()=>{
        it('Testar Pesquisa com string inválida',()=>{
            homePage.barraPesquisaPreencherInput('sjdsadhkuahsfoiu')
            homePage.barraPesquisaClicarBtnPesquisar()
            homePage.barraPesquisaDropboxSelecionarCategoria()
            listaProdutosPage.validarTextoPesquisaVazia()
        })
        it('Testar Pesquisa com apenas números inválida',()=>{
            homePage.barraPesquisaPreencherInput(faker.random.numeric(10))
            homePage.barraPesquisaClicarBtnPesquisar()
            homePage.barraPesquisaDropboxSelecionarCategoria()
            listaProdutosPage.validarTextoPesquisaVazia()
        })
    })
})