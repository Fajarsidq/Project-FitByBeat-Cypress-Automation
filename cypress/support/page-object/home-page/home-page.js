const locator = require('./home-locators')

class homePage {


    //calculate your ibm
    async verifyHomePageAppears() {
        cy.xpath(locator.data_test_id.input_height).should('exist')
        cy.xpath(locator.data_test_id.input_weight).should('exist')
        cy.xpath(locator.data_test_id.input_age).should('exist')
        cy.xpath(locator.data_test_id.dropdown_gender).should('exist')
    }

    async inputUserHeight (userHeight) {
        cy.xpath(locator.data_test_id.input_height).type(userHeight)
    }

    async inputUserWeight(userWeight) {
        cy.xpath(locator.data_test_id.input_weight).type(userWeight)
    }

    async inputUserAge(userAge) {
        cy.xpath(locator.data_test_id.input_age).type(userAge)
    }
    
    async dropdownGender() {
        cy.xpath(locator.data_test_id.dropdown_gender).click()
        cy.xpath(locator.data_test_id.select_gender).click()
        
    }
    async clickCalculateButton() {
        cy.xpath(locator.data_test_id.calculate_button).click()
    }
    
    async calculateYourIBM(userHeight,userWeight,userAge) {
        this.inputUserHeight(userHeight)
        this.inputUserWeight(userWeight)
        this.inputUserAge(userAge)
        this.dropdownGender()
        this.clickCalculateButton()
    }

    //free trial

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

module.exports = new homePage()
