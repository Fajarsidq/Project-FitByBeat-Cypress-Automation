const aboutUsPage = require('../support/page-object/aboutUs-page/aboutUs-page')
const base = require('../support/page-object/base')


describe("About Us", () => {
    beforeEach(() => {
        base.openUrl()
    })

    it("verify user check Icon Instagram", () => {
        aboutUsPage.functionIconIg()
        aboutUsPage.verifyAboutUsPageAppears()
    })
    
    it("verify user check Icon Facebook", () => {
        aboutUsPage.functionIconFacebook()
        aboutUsPage.verifyAboutUsPageAppears()
    })
})

