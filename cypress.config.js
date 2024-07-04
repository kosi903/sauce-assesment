const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout:6000,
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    setupNodeEvents(on, config)
     {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
   
  },
});
