//cypress.config.js
//we will be configuring the cypress

const {defineConfig } = require('cypress');
module.exports = defineConfig({
    e2e:{
        baseUrl : 'http://localhost:3000',
        setupNodeEvents(on,config){
        },
    },
});