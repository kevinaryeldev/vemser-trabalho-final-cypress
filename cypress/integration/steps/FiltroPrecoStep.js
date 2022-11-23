/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import HomePage from "../pages/HomePage"
import ListaProdutosPage from "../pages/ListaProdutosPage"

const homePage = new HomePage()
const listaProdutosPage = new ListaProdutosPage()
context('Testes Filtro de Preco',()=>{
    describe('Cenários Positivos',()=>{
        it('Testar Filtro Valido',()=>{
            homePage.pesquisarItemAleatorio(faker.color.human())
            listaProdutosPage.filtroPrecoInserirValores(10,20)
            listaProdutosPage.filtroPrecoClicarBtnIr()
            listaProdutosPage.validarUrlPaginaContem('A1000-2000')
        })
    })
    describe('Cenários Negativos',()=>{
        it('Testar Filtro com valor max maior que valor min',()=>{
            homePage.pesquisarItemAleatorio(faker.color.human())
            listaProdutosPage.filtroPrecoInserirValores(20,10)
            listaProdutosPage.filtroPrecoClicarBtnIr()
            listaProdutosPage.validarUrlPaginaNaoContem('&rh=p_36%3A')
        })
        it('Testar Filtro passando texto como valor',()=>{
            homePage.pesquisarItemAleatorio(faker.color.human())
            listaProdutosPage.filtroPrecoInserirValores('teste','testando')
            listaProdutosPage.filtroPrecoClicarBtnIr()
            listaProdutosPage.validarUrlPaginaNaoContem('&rh=p_36%3A')
        })
    })
})