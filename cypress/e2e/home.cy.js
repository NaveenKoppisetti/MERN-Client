describe('Home Page Test',()=>{
    it('Check the Input Field',()=>{
        cy.visit('/');
        cy.get('input').type('Cinderella')
        cy.get('button').should('be.visible')
        cy.get('button').click({multiple:true});
        //functionality testing
        cy.contains('welcome,cinderella')
        cy.get('input').should('have.value','Cinderella')
    })
})