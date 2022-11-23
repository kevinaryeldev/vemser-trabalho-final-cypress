import BasePage from "../pages/BasePage";
const basePage = new BasePage
import {
    faker
} from '@faker-js/faker';

let selEnderoBtn = "#nav-global-location-popover-link";
let cepPrimeiroCampo = "input.a-declarative.a-span7";
let cepSegundoCampo = "input.a-declarative.a-span4";
let confirmarBtn = "#GLUXZipUpdate > span > input";
export let cepInserido = "#glow-ingress-line2";
export let msgCepIncorreto = "#GLUXZipError > div > div > div";


export default class HomePage {

    buscarCep(primeiroCampo, segundoCampo) {

        cy.reload(true);
        basePage.tempo(2000)

        basePage.click(selEnderoBtn)

        basePage.preencherInput(cepPrimeiroCampo, primeiroCampo)
        basePage.preencherInput(cepSegundoCampo, segundoCampo);
        basePage.click(confirmarBtn)
    }

}