const locator = require('./aboutUs-locators')

class aboutUsPage {



    async verifyAboutUsPageAppears() {
        cy.xpath(locator.data_test_id.icon_facebook).should('exist')
        cy.xpath(locator.data_test_id.icon_ig).should('exist')
    }

    async clickIconFacebook () {
        cy.xpath(locator.data_test_id.icon_facebook).click()
    }

    async clickIconIg() {
        cy.xpath(locator.data_test_id.icon_ig).click()
    }

    async buttonAboutUs() {
        cy.xpath(locator.data_test_id.button_tab_aboutUs).click({ multiple: true })
    }
    
    async functionIconIg() {
        this.clickIconIg()
    }

    async functionIconFacebook() {
        this.clickIconFacebook()
    }
    
    async inputFistName (first_name) {
        cy.xpath(locator.data_test_id.input_fist_name).type(first_name)
    }

    async inputLastName(last_name) {
        cy.xpath(locator.data_test_id.input_last_name).type(last_name)
    }

    async inputBirthday(birthday) {
        cy.xpath(locator.data_test_id.input_birthday).type(birthday)
    }
    
    async inputEmail(email) {
        cy.xpath(locator.data_test_id.input_email).type(email)
    }

    async inputLandlineNumber(landline) {
        cy.xpath(locator.data_test_id.input_landline).type(landline)
    }

    async inputMobilePhone(mobile) {
        cy.xpath(locator.data_test_id.input_phone_number).type(mobile)
    }
    
    async clickSendButton() {
        cy.xpath(locator.data_test_id.send_button).click()
    }

    async clickFreeTrial() {
        cy.xpath(locator.data_test_id.free_trial_menu).click()
    }   
    
    async FreeTrial(first_name,last_name,birthday,email,landline,mobile) {
        this.clickFreeTrial()
        this.inputFistName(first_name)
        this.inputLastName(last_name)
        this.inputBirthday(birthday)
        this.inputEmail(email)
        this.inputLandlineNumber(landline)
        this.inputMobilePhone(mobile)
        this.clickSendButton()
    }

}

module.exports = new aboutUsPage()
