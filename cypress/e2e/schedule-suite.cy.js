const schedulePage = require('../support/page-object/schedule-page/schedule-page')
const base = require('../support/page-object/base')
const data = require('../support/page-object/static-data')
const random = require('../support/common-function/randomize')


describe("Schedule", () => {
    beforeEach(() => {
        base.openUrl()
    })

    
    it("booking fuction", () => {
        schedulePage.booking()
    })

    it("generate register book page", () => {
        schedulePage.bookingFunction(random.first_name(), random.email(), random.phone_number())
    })
})

