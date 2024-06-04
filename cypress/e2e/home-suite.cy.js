const homePage = require('../support/page-object/home-page/home-page')
const base = require('../support/page-object/base')
const data = require('../support/page-object/static-data')
const random = require('../support/common-function/randomize')


describe("home", () => {
    beforeEach(() => {
        base.openUrl()
    })

    it("Calculate Your IBM", () => {
        homePage.calculateYourIBM(data.data_your_IBM.height, data.data_your_IBM.weight,data.data_your_IBM.Age)
        homePage.verifyHomePageAppears()
    })

    it("Free Trial", () => {
        homePage.FreeTrial(random.first_name(), random.last_name(),data.free_trial.birthday, random.email(), random.landline_number(), random.phone_number())

    })
})

