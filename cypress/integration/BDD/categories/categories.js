/// <reference types="Cypress" />​
/// <reference types="cypress-iframe" />​
import 'cypress-iframe';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
beforeEach( function(){ 
    cy.fixture('example').then(function(data)
    {
        this.data = data 
    })

})
// @phone category
Given ('I open demoblaze Ecommerce website', function(){
    cy.visit('http://www.demoblaze.com/')
})
When ('I click the login Button', function(){
    cy.get('#login2').click()
})

Then ('I enter a valid username', function(){
    cy.wait(2000)
    cy.get('#loginusername').type(this.data.username);})

When ('I entered a valid password', function(){
    cy.wait(2000)
    cy.get('#loginpassword').type(this.data.password)
})
Then ('I click on sign in Button', function(){
    cy.wait(2000)
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
})

When ('I Validate successful login to my account', function(){
    
})
When ('I click the Cart Button' , function(){
    
})

Then ('I validated list of items in Cart using intercept', function(){

})
