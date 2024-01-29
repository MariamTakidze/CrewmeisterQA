/// <reference types = "Cypress"/>
describe('Login page', () => {
    beforeEach(() => {
        cy.visit('https://app.crewmeister.com/sign-in')
        // cy.clearCookies()
        
        
    })
    it("lala", ()=>{
    cy.viewport(1494, 807);
    cy.get('input[name="identifier"]').type("Gang27")
    cy.get('input[name="password"]').type("Asd123")
    cy.get("#user-sign-in").click()
    cy.wait(5000)
    
    // cy.clock(now)
    // cy.log(now)
    // const currentDate = Cypress.moment().format('YYYY-MM-DD');
    // cy.log(currentDate)

         // Get the current date
    const currentDate = new Date();

    // Format the date as YYYY-MM-DD
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hour = String(currentDate.getHours()).padStart(2, '0');
    const minute = String(currentDate.getMinutes()).padStart(2, '0');
    const daysOfWeekAbbreviated = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayOfWeek = currentDate.getDay();
    const abbreviatedDay = daysOfWeekAbbreviated[dayOfWeek];
    const formattedDateTime = ` ${hour}:${minute}`;



    // Combine the formatted parts
    const formattedDate = `${day}/${month}/${year}`;

    // Log the current date
    cy.log(`Current Date:${formattedDate}`);   

    

    //start work 
    cy.get('#page-time-tracking-start-work').click()
    //wait for 2000 
    cy.wait(3000)
    // cy.get('._cvv7vr6').should("contain", "You are clocked in")
    cy.contains("You're clocked in").should('exist');
    // cy.get('#page-time-tracking-table-header-column-4').click()
    cy.get('tbody tr').first().find("td").contains("running").should("exist")
    cy.wait(6000)
    // cy.get('div[class = "_1b7g6azb"]').invoke("text").as("running")
    
    //Clock out 
    cy.get('#page-time-tracking-stop-work').click()
    cy.get('tbody tr').first().find("td").eq("6").invoke('text').should('be.eq', formattedDateTime)
    cy.contains("You're clocked out").should('exist');
   
    //
    cy.get('tbody tr').first().find("td").eq("2").should("contain.text", "Mariam")
    cy.wait(3000)
    cy.get('tbody tr',{ timeout: 15000 }).first().find("td").eq("4").invoke('text').should('be.eq', formattedDate)
    // cy.get('tbody tr',{ timeout: 15000 }).first().find("td").eq("6").invoke('text').should('be.eq', formattedDateTime)
    // cy.get('tbody tr').first().find("td").contains(`{formattedDate}`).should("exist")
    cy.log(formattedDate)
    
})
})