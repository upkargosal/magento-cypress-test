import Login from "../default_path/Login";

describe('Login_test', function() { 
    let data
  beforeEach(function() {
      cy.fixture('user_data').then((obj) => {
          data = obj
      });
  });

    it('Successful login', () => {
      Login.visit();
      Login.Enter_login_details(data.email, data.password);
      Login.login_button();
      cy.wait(5000);
      cy.contains('welcome');
      cy.contains(name)
    }); 

    it('Invalid email', () => {
         Login.visit();
        Login.Enter_login_details(data.invalid_email, data.password);
        Login.login_button();
      
        cy.get('body').then(($body) => {
          const message1 = 'Please enter a valid email address (Ex: johndoe@domain.com).';
          const message2 = 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.';
      
          if ($body.text().includes(message1) || $body.text().includes(message2)) {
            expect(true).to.be.true; 
          } else {
            throw new Error('Neither error message is present.');
          }
        });
      });

      it('invalid password', () => {
        Login.visit();
        Login.Enter_login_details(data.email, data.invalid_password);
        Login.login_button();
        cy.contains('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
      }); 
});
