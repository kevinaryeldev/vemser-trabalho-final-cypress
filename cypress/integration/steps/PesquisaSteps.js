/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import HomePage from "../pages/HomePage"
import ListaProdutosPage from "../pages/ListaProdutosPage"

const homePage = new HomePage()
const listaProdutosPage = new ListaProdutosPage()
context('Testes Barra de Pesquisa',()=>{
    describe('Cenários Positivos',()=>{
        it("Testar Pesquisa válida",()=>{
            cy.allure()
            .epic('Teste de Pesquisa')
            .feature('Cenários Positivos')
            story('Fazer pesquisa com texto válido')
            .owner('Kevin Aryel');
            homePage.barraPesquisaPreencherInput(faker.color.human())
            homePage.barraPesquisaDropboxSelecionarCategoria()
            homePage.barraPesquisaClicarBtnPesquisar()
            listaProdutosPage.validarTextoPesquisaComItens()
        })
    })
    describe('Cenários Negativos',()=>{
        it('Testar Pesquisa com string inválida',()=>{
            cy.allure()
            .epic('Teste de Pesquisa')
            .feature('Cenários Negativos')
            story('Fazer pesquisa com texto inválido')
            .owner('Kevin Aryel');
            homePage.barraPesquisaPreencherInput('sjdsadhkuahsfoiu')
            homePage.barraPesquisaClicarBtnPesquisar()
            homePage.barraPesquisaDropboxSelecionarCategoria()
            listaProdutosPage.validarTextoPesquisaVazia()
        })
        it('Testar Pesquisa com apenas números inválida',()=>{
            cy.allure()
            .epic('Teste de Pesquisa')
            .feature('Cenários Negativos')
            story('Fazer pesquisa com apenas números')
            .owner('Kevin Aryel');
            homePage.barraPesquisaPreencherInput(faker.random.numeric(10))
            homePage.barraPesquisaClicarBtnPesquisar()
            homePage.barraPesquisaDropboxSelecionarCategoria()
            listaProdutosPage.validarTextoPesquisaVazia()
        })
    })
})