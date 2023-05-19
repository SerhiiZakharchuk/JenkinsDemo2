it('google test', function() {
  cy.visit('https://www.google.com/')
  cy.get('.SDkEP', {timeout: 6000}).type('Automation Step By Step{enter}')
  cy.contains('Відео').click()
  
})

it.only('login test', function() {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
  cy.get('.oxd-button').click()
  cy.get(':nth-child(1) > .oxd-main-menu-item').click()
  cy.get('.orangehrm-header-container > .oxd-button').click()
  cy.get('.oxd-form-actions').find('.oxd-button--secondary').click()
  
  
})









/*
"watchForFileChanges": false,
  "defaultCommandTimeout": 6000
*/