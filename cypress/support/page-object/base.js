class Base {
    async maximizeWindows() {
        cy.viewport(window.screen.width, window.screen.height)
    }

    async openUrl() {
        cy.visit('https://fitbybeat.com/')
        this.maximizeWindows()
    }
}

module.exports = new Base()
