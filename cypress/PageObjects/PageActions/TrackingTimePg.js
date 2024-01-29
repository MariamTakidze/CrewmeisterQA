class TrackingTimePg{

     clockIn(){
        cy.wait(5000)
        // cy.get('#page-time-tracking-start-work').click();
        cy.get('#page-time-tracking-start-work').click().invoke("text").as("clockInTime")
     }
     clockOut(){
        cy.get('#page-time-tracking-stop-work').click().invoke("text").as("clockOutTime");
     }

     checkClockedInMessage() {
        cy.contains("You're clocked in").should('exist');
    }
    
    checkClockedOutMessage() {
        cy.contains("You're clocked out").should('exist');
    }
    checkRunningStatusInTable() {
        cy.get('tbody tr').first().find("td").contains("running").should("exist");
    }
    
    checkEmployeeNameInTable(name) {
        cy.get('tbody tr').first().find("td").eq(2).should("contain.text", name);
    }
    checkStartTime(time){
        cy.get('tbody tr').first().find("td").eq("5").invoke('text').should('be.eq', time)
    }
    checkEndTime(hour){
        // cy.get('tbody tr').first().find("td").eq("6").invoke('text').should('be.eq', time)
        cy.get('tbody tr').first().find("td").eq("6").invoke('text').should('include',hour)
    }
    checkDateInTable(expectedDate) {
        cy.get('tbody tr').first().find("td").eq(4).invoke('text').should('be.eq', expectedDate);
    }
    checkAbreviatedDayofWeek (abbreviatedDay){
        cy.get('tbody tr',{ timeout: 15000 }).first().find("td").eq("3").invoke('text').should('be.eq', abbreviatedDay)
    }
    
}

module.exports = new TrackingTimePg()