class LoginPg{

    elements = {
        usernameInput: () => cy.get('input[name="identifier"]'),
        passwordInput: () => cy.get('input[name="password"]') ,
        loginBtn: () => cy.get("#user-sign-in")
    }

    typeUsername(username) {
       this.elements.usernameInput().type(username);
    }

    typePassword(password) {
        this.elements.passwordInput().type(password);
     }

     clickLoginBtn(){
        this.elements.loginBtn().click()
     }
}

module.exports = new LoginPg()