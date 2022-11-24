/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import HomePage from "../pages/HomePage"
import ListaProdutosPage from "../pages/ListaProdutosPage"

const homePage = new HomePage()
const listaProdutosPage = new ListaProdutosPage()
context('Testes Filtro de Preco',()=>{
    describe('Cenários Positivos',()=>{
        it('Testar Filtro Valido',()=>{
            cy.allure()
            .epic('Teste de Filtro')
            .feature('Cenários Positivos')
            story('Filtrar dados com valor valido')
            .owner('Kevin Aryel');
            homePage.pesquisarItemAleatorio(faker.color.human())
            listaProdutosPage.filtroPrecoInserirValores(10,20)
            listaProdutosPage.filtroPrecoClicarBtnIr()
            listaProdutosPage.validarUrlPaginaContem('A1000-2000')
        })
    })
    describe('Cenários Negativos',()=>{
        it('Testar Filtro com valor max maior que valor min',()=>{
            cy.allure()
            .epic('Teste de Filtro')
            .feature('Cenários Negativoss')
            story('Filtrar dados com valor max maior que valor min')
            .owner('Kevin Aryel');
            homePage.pesquisarItemAleatorio(faker.color.human())
            listaProdutosPage.filtroPrecoInserirValores(20,10)
            listaProdutosPage.filtroPrecoClicarBtnIr()
            listaProdutosPage.validarUrlPaginaNaoContem('&rh=p_36%3A')
        })
        it('Testar Filtro passando texto como valor',()=>{
            cy.allure()
            .epic('Teste de Filtro')
            .feature('Cenários Negativoss')
            story('Filtrar dados passando texto como valor')
            .owner('Kevin Aryel');
            homePage.pesquisarItemAleatorio(faker.color.human())
            listaProdutosPage.filtroPrecoInserirValores('teste','testando')
            listaProdutosPage.filtroPrecoClicarBtnIr()
            listaProdutosPage.validarUrlPaginaNaoContem('&rh=p_36%3A')
        })
    })
})