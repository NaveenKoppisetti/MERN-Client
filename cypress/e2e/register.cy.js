describe('Register Page E2E testing',()=>{
    it('Testing Register Page Fun',()=>{
        cy.visit('/register');
        cy.get('h1').should('contain','Register Here!');
        cy.get('input[name="name"]').type('jackie Chan');
        cy.get('input[name="email"]').type('jackie@gmail.com');
        cy.get('input[name="password"]').type('1234567');
        cy.get('button[type="submit"]').click({multiple:true});
        cy.contains('User Registered Successfully !').should('be.visible');
        cy.log('Register Functionality is Working');
    })
})