
describe("suite de test: connexion sauceDemo", function () {

it("test1: userName valide / mdp valide", function () {
    cy.visit ("https://www.saucedemo.com/")
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    cy.get('[class="shopping_cart_container"]').should("be.visible")
})

it("test2: userName valide / mdp invalide", function () {
    cy.visit ("https://www.saucedemo.com/")
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("autre mot de passe")
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should("be.visible")
    cy.get('[data-test="error"]').should("include.text","Epic sadface: Username and password do not match any user in this service")

})

it("test3: userName invalide / mdp invalide", function () {
    cy.visit ("https://www.saucedemo.com/")
    cy.get('[data-test="username"]').type("autre userName")
    cy.get('[data-test="password"]').type("autre mot de passe")
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should("be.visible")
    cy.get('[data-test="error"]').should("include.text","Epic sadface: Username and password do not match any user in this service")
})

it("test4: userName bloqué", function () {
    cy.visit ("https://www.saucedemo.com/")
    cy.get('[data-test="username"]').type("locked_out_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should("be.visible")
    cy.get('[data-test="error"]').should("include.text","Epic sadface: Sorry, this user has been locked out.")
   
})

})