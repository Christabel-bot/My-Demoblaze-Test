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

When ('I click phones category Button', function(){
    cy.get('.list-group a:nth-child(2)').click()
    cy.wait(2000)
})
Then ('I select a phones', function(){
    cy.get('#tbodyid > div:nth-child(3) > div > div > h4 > a').contains('Nexus 6').click()
})

When ('I click the add to cart button', function(){
cy.get('.btn').contains('Add to cart').click()
})
Then ('I validate alert Product added', function(){
    cy.on('window:alert', (str) =>
        {
            expect(str).to.equal('Product added.')
        })
   })

When ('I validate the product name and product Quantity', function(){
    
        cy.get('#cartur').click()
        cy.wait(3000)
        const num = 1
        var sum = 0
        cy.get('#tbodyid > div:nth-child(3)').each(($el, index, $list) => { 
            const Productname = $el.text()
            cy.expect(Productname).to.equal('Nexus 6')
            cy.log(Productname) 
        })
        cy.get('#tbodyid > div:nth-child(3)').each(($el, index, $list) => { 
            //const NumOfProduct = $el.text()
            sum = sum + 1
    
        }).then(function () { 
            cy.log(sum)
            cy.expect(sum).to.deep.equal(num)
        })               
    })

Then ('I validate the product price', function(){
        var TotalNum = 0
        cy.get('#tbodyid > div:nth-child(3)').each(($el, index, $list) => {
            const total = $el.text()
            var totalT = total.trim()
            TotalNum = Number(TotalNum) + Number(totalT) 
        }).then(function () {
            cy.log(TotalNum)
        })   
        cy.get('#totalp').then(function (element) { 
            const amount = element.text()
            expect(Number(amount)).to.equal(TotalNum)
        })
    })

// @laptop category
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
    
When ('I click laptop category Button', function(){
    cy.get('.list-group a:nth-child(3)').click()
        cy.wait(2000)
    })
Then ('I select a laptop', function(){
        cy.get('#tbodyid > div:nth-child(3) > div > div > h4 > a').contains('MacBook air').click()
    })

When ('I click the add to cart button', function(){
    cy.get('.btn').contains('Add to cart').click()
    })
Then ('I validate alert Product added', function(){
    var AddToCartArr = Array.from({length:3},(v,k)=>k+1)
    cy.wrap(AddToCartArr).each((index) => {
        cy.get('.col-sm-12 > .btn').click()
        cy.on('window:alert', (str) =>{
            expect(str).to.equal('Product added.')
        })
    })
})
    
When ('I validate the product name and product Quantity', function(){
        
            cy.get('#cartur').click()
            cy.wait(3000)
            const num = 1
            var sum = 0
            cy.get('#tbodyid > div:nth-child(3) > div > div > h4 > a').each(($el, index, $list) => { 
                const Productname = $el.text()
                cy.expect(Productname).to.equal('MacBook air')
                cy.log(Productname) 
            })
            cy.get('#tbodyid > div:nth-child(3)').each(($el, index, $list) => { 
                //const NumOfProduct = $el.text()
                sum = sum + 1
        
            }).then(function () { 
                cy.log(sum)
                cy.expect(sum).to.deep.equal(num)
            })               
        })
    
    Then ('I validate the product price', function(){
            var TotalNum = 0
            cy.get('#tbodyid > div:nth-child(3)').each(($el, index, $list) => {
                const total = $el.text()
                var totalT = total.trim()
                TotalNum = Number(TotalNum) + Number(totalT) 
            }).then(function () {
                cy.log(TotalNum)
            })   
            cy.get('#totalp').then(function (element) { 
                const amount = element.text()
                expect(Number(amount)).to.equal(TotalNum)
            })
        })

// @monitors category
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
        
When ('I click monitors category Button', function(){
            cy.get('.list-group a:nth-child(4)').click()
            cy.wait(2000)
})
Then ('I select a monitor', function(){
        cy.get('.hrefch').contains('Apple monitor 24').click()
 })
        
When ('I click the add to cart button', function(){
        cy.get('.btn').contains('Add to cart').click()
})
Then ('I validate alert Product added', function(){
    cy.on('window:alert', (str) =>
    {
        expect(str).to.equal('Product added.')
        })
    })
        
When ('I validate the product name and product Quantity', function(){
    cy.get('#cartur').click()
    cy.wait(3000)
    const num = 1
    var sum = 0
    cy.get('.hrefch').each(($el, index, $list) => { 
    const Productname = $el.text()
    cy.expect(Productname).to.equal('Apple monitor 24')
    cy.log(Productname) 
    })
    cy.get('#tbodyid > div:nth-child(3)').each(($el, index, $list) => { 
    //const NumOfProduct = $el.text()
    sum = sum + 1
            
    }).then(function () { 
    cy.log(sum)
    cy.expect(sum).to.deep.equal(num)
    })               
    })
            
                
        
            Then ('I validate the product price', function(){
                var TotalNum = 0
                cy.get('#tbodyid > div:nth-child(3)').each(($el, index, $list) => {
                    const total = $el.text()
                    var totalT = total.trim()
                    TotalNum = Number(TotalNum) + Number(totalT) 
                }).then(function () {
                    cy.log(TotalNum)
                })   
                cy.get('#totalp').then(function (element) { 
                    const amount = element.text()
                    expect(Number(amount)).to.equal(TotalNum)
                })
            })