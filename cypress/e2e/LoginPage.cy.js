/// <reference types = "Cypress"/>

import loginpage from '../PageObjects/PageActions/LoginPg';


const performLogin = (username, password) => {
  cy.visit('https://app.crewmeister.com/sign-in')
  loginpage.typeUsername(username)
  loginpage.typePassword(password)
  loginpage.clickLoginBtn()
}

// describe('Login page', () => {
//   beforeEach(() => {
//     cy.visit('https://app.crewmeister.com/sign-in')
//   })

//   it('passes', () => {
//     performLogin('JoseBarronTest', '1111')
//   })
// })

export {
  performLogin
}