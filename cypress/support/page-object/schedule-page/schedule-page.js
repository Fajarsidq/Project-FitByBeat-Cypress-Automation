const locator = require('./schedule-locators')

class schedulePage {

    async verifyHomePageAppears() {
        cy.xpath(locator.data_test_id.select_dropdown1).should('exist')
        cy.xpath(locator.data_test_id.dropdown_studio1).should('exist')
        cy.xpath(locator.data_test_id.select_dropdown1).should('exist')
    }

    async visitTabSchedule() {
        cy.visit('https://fitbybeat.com/schedule/')
    }

    async visitBookPage() {
        cy.visit('https://booking.fitbybeat.com/booking/home/step/1')
    }

    async buttonBook() {
        cy.xpath(locator.data_test_id.button_book_now1).click()
    }

    async selectClass () {
        cy.xpath(locator.data_test_id.dropdown_class)
        .click(locator.data_test_id.select_class)
    }

    async selectDate() {
        cy.xpath(locator.data_test_id.dropdown_date).click()
        cy.xpath(locator.data_test_id.select_date).click()
    }

    async selecHour() {
        cy.xpath(locator.data_test_id.dropdown_hour).click()
        cy.xpath(locator.data_test_id.select_hour).click()
    }
    
    async selectQtty() {
        cy.xpath(locator.data_test_id.dropdown_qtty).click()
        cy.xpath(locator.data_test_id.select_qtty).click()
        
    }
    async clickButtonNext1() {
        cy.xpath(locator.data_test_id.button_next).click()
    }
    
    async selectUserName(username) {
        cy.xpath(locator.data_test_id.user_name).type(username)
    }

    async selectUserEmail(email) {
        cy.xpath(locator.data_test_id.user_email).type(email)
    }
    
    async selectUserWhatsapp(phone) {
        cy.xpath(locator.data_test_id.user_whatsapp).type(phone)
    }

    async clickButtonNext2() {
        cy.xpath(locator.data_test_id.button_next1).click()
    }
    async booking() {
        this.visitTabSchedule()
        this.buttonBook()

    }
    async bookingFunction(username,email,phone) {
        this.visitBookPage()
        this.selectClass()
        this.selectDate()
        this.selecHour()
        this.selectQtty()
        this.clickButtonNext1()
        this.selectUserName(username)
        this.selectUserEmail(email)
        this.selectUserWhatsapp(phone)
        this.clickButtonNext2()

    }

}

module.exports = new schedulePage()
