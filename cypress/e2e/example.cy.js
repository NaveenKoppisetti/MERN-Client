//THIS IS WHERE WE'LL WRITE E2E TEST
describe('Open Home Page',()=>{
    it('Open Home Page',()=>{
        cy.visit('/')
        //we use visit func to visit a url 'visit('url')'
        cy.contains('Welcome')
        //if a text is present in the document
    })
})