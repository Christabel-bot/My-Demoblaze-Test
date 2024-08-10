Feature: Demoblaze Ecommerce test validation​
 Application regression​
@regression @smoke


@phonescategory
Scenario: validate adding phones to cart
    Given I open demoblaze Ecommerce website
    When I click the login Button
    Then I enter a valid username
    When I entered a valid password
    Then I click on sign in Button
    When I click phones category Button
    Then I select a phones
    When I click the add to cart button
    Then I validate alert - "Product added"
    When I validate the product name and product Quantity/number
    Then I validate the product price


@laptopcategory 
Scenario: validate adding laptop to cart
    Given I open demoblaze Ecommerce website
    When I click the login Button
    Then I enter a valid Username
    When I entered a Valid password
    Then I click on sign in Button
    When I click phones category Button
    Then I select a phones
    When I click the add to cart button
    Then I validate alert - "Product added"
    When I validate the product name and product Quality/number
    Then I validate the product price

@monitorscategory 
Scenario: validate adding monitors to cart
    Given I open demoblaze Ecommerce website
    When I click the login Button
    Then I enter a valid Username
    When I entered a Valid password
    Then I click on sign in Button
    When I click phones category Button
    Then I select a phones
    When I click the add to cart button
    Then I validate alert - "Product added"
    When I validate the product name and product Quality/number
    Then I validate the product price