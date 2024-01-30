
class TrackingTimePg{
    

     clockIn(){
        cy.wait(5000)
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
        cy.get('tbody tr').find("td").contains("running").should("exist");
    }
    
    checkEmployeeNameInTable(date,name) {
        cy.get('tbody tr').contains(date).parent('tr').find("td").eq(2).should("contain.text", name);
    }
    checkStartTime(date,time){
        cy.get('tbody tr').contains(date).parent('tr').find("td").eq("5").invoke('text').should('be.eq', time)
    }
    checkEndTime(date,hour){
        cy.get('tbody tr').contains(date).parent('tr').find("td").eq("6").invoke('text').should('include', hour)
        // cy.get('tbody tr').first().next().find("td").eq("6").invoke('text').should('include', hour)
    }
    checkDateInTable(date,expectedDate) {
        cy.get('tbody tr').contains(date).parent('tr').find("td").eq(4).invoke('text').should('be.eq', expectedDate);
    }
    checkAbreviatedDayofWeek (date,abbreviatedDay){
        cy.get('tbody tr').contains(date).parent('tr').find("td").eq("3").invoke('text').should('be.eq', abbreviatedDay)
    }
    
}

module.exports = new TrackingTimePg()