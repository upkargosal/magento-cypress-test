import signup from "../default_path/Signup";
import Login from "../default_path/Login";

describe('Signup_test', function() { 
  let data 
  beforeEach(function() {
      cy.fixture('user_data').then((obj) => {
         data=obj
      });
  });

    it('Enter all the valid details', () => {
      signup.visit();
      console.log(data)
      signup.Enter_details(data.name, data.lastname, data.email, data.password);
      signup.Create_account_button();
      cy.url().should('include', 'magento.softwaretestingboard.com/customer/account/')
      cy.get('.message-success', { timeout: 10000 }).should('contain', 'Thank you for registering with Main Website Store.');
      cy.get('.base').should('contain', 'My Account')
    });

    it('Enter invalid email',() => {
      signup.visit();
      signup.Enter_details(data.name, data.lastname, data.invalid_email, data.password);
      signup.Create_account_button();
      cy.get('#email_address-error').should('contain', 'Please enter a valid email address (Ex: johndoe@domain.com).')
    });

    it('Enter invalid password',() => {
      signup.visit();
      signup.Enter_details(data.name, data.lastname, data.email, data.invalid_password);
      signup.Create_account_button();
      cy.get('#password-error').should('contain', 'Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')
    });

    it('Existing email error message', () => {
      signup.visit();
      signup.Enter_details(data.name, data.lastname, data.email, data.password);
      signup.Create_account_button();
      cy.get('.message-error').should('contain','There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
    })
  })