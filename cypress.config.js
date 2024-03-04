module.exports = {
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    baseUrl: "https://www.aluminati.net/",
  },
  env: {
    fullname: "Ashley Wells",
    email: "ashley.test@yahoo.com",
    phone: "021 123 4567",
    organisation: "Test Capital",
    jobtitle: "Test Manager",
    message: "This is a Test",
  },
};
