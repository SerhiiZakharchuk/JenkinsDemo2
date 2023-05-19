  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('get').click()
    cy.get('#query-btn', {timeout: 6000})
        .should('contain', 'Button')
        .should('have.class', 'query-btn')
        .should('be.visible')
        .should('be.enabled')

    cy.get('#query-btn')
        .invoke('attr', 'id')
        .should('equal', 'query-btn')

    cy.get('#query-btn')
       .should('contain', 'Button')
       .and('have.class', 'query-btn')

    //Explicit accertions
    expect(true).to.be.true

    let name = 'Raghav'

    expect(name).to.be.equal('Raghav')

    assert.equal(4, 3+1, 'not equal')
    assert.strictEqual('4', '4', 'not strict equal')

  })
