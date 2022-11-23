/// <reference types="cypress" />
export default class BasePage {
   click(elemet){ 
      cy.get(elemet).click() 
   }
  
   clickForce(elemet){ 
      cy.get(elemet).click({force:true}) 
   } 
  
   preencherInput(element, text){ 
      cy.get(element).clear()
      cy.get(element).type(text)
   }
   
   limparInput(element){
      cy.get(element).clear()
   }

   preencherInputComTeclaNoFinal(element, text, tecla){
      cy.get(element).type(text).type(tecla);
   }
  
   preencherInputForce(element, text){ 
       cy.get(element).type(text, {force:true})
   }
    
   tempo(tempo){ 
       cy.wait(tempo) 
   }

   select(element, value){ 
      cy.get(element).select(value,{force: true})
   }
  
   validarText(element, text){ 
      cy.get(element).should('contain', text) 
   }

   validarQuantItemNaLista(element, quant) {
      cy.get(element).should('have.length', quant)
   }

   validarUrl(url) {
      cy.url()
         .should('contain', url)
   }
   validarNegativaUrl(url){
      cy.url().should('not.contain',url)
   }
}