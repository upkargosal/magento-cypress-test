class signup {
    visit() {
        cy.visit('https://magento.softwaretestingboard.com')
        cy.get('.panel > .header > :nth-child(3) > a').click()
        cy.get('.login-container > .block-new-customer > .block-content > .actions-toolbar > div.primary > .action').click()
    }
    Enter_details(name,lastname,email,password){
        cy.get('#firstname').type(name);
        cy.get('#lastname').type(lastname);
        cy.get('#email_address').type(email);
        cy.get('#password').type(password);
        cy.get('#password-confirmation').type(password);

    }
    Create_account_button(){
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    }
} 
export default new signup();