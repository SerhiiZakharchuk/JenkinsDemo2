import { LoginPage } from './pages/login_page.cy.js';

const loginPage = new LoginPage();

it('google test', function () {
  loginPage.navigate('https://trytestingthis.netlify.app/');
  loginPage.enterUsername('test');
  loginPage.enterPassword('test');
  loginPage.clickLogin();
  //cy.get('.navbar > [href="index.html"]').click()
});
