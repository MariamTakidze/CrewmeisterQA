/// <reference types = "Cypress"/>

import { performLogin } from "./LoginPage.cy";
import trackingTimePg from "../PageObjects/PageActions/TrackingTimePg";


describe('Login page', () => {
    beforeEach(() => {
      // cy.visit('https://app.crewmeister.com/sign-in')
      cy.clearCookies()
      cy.viewport(1494, 807);
      performLogin('Gang27', 'Asd123')
     
    })
    


    it('should log in and perform time tracking actions', () => {

     // Get the current date
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hour = String(currentDate.getHours()).padStart(2, '0');
    const minute = String(currentDate.getMinutes()).padStart(2, '0');
    const daysOfWeekAbbreviated = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayOfWeek = currentDate.getDay();
    const abbreviatedDay = daysOfWeekAbbreviated[dayOfWeek];



    // Combine the formatted parts
    const formattedDate = `${day}/${month}/${year}`;
    const formattedDateTime = `${hour}:${minute} `;


     trackingTimePg.clockIn();
    //  trackingTimePg.checkStartTime(formattedDateTime)
     trackingTimePg.checkClockedInMessage();
     trackingTimePg.checkRunningStatusInTable();
 
     cy.wait(6000);
 
     trackingTimePg.clockOut();
     trackingTimePg.checkClockedOutMessage();
     trackingTimePg.checkEndTime(hour)
 
     trackingTimePg.checkEmployeeNameInTable("Mariam");
     trackingTimePg.checkDateInTable(formattedDate);
     trackingTimePg.checkAbreviatedDayofWeek(abbreviatedDay)
    })
  })
