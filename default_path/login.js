class login {
    visit() {
        cy.visit('https://magento.softwaretestingboard.com')
        cy.get('.panel > .header > .authorization-link > a').click()
    }
    Enter_login_details (email,password) {
        cy.get('#email').type(email);
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(password);
    }
    login_button() {
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    }
}
export default new login ();