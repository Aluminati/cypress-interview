/*
Task: visit https://aluminati.net, browse to the contact form, and fill out the form with whatever details you deem appropriate.
You will not be able to submit the form as it's behind a CAPTCHA, but simply filling out the data is enough for this exercise.
*/

describe("Contact form", () => {
  it("should be able to fill out the contact form", () => {
    cy.contactUs({
      fullName: Cypress.env("fullname"),
      customerEmail: Cypress.env("email"),
      phoneNumber: Cypress.env("phone"),
      customerOrganisation: Cypress.env("organisation"),
      jobTitle: Cypress.env("jobtitle"),
      customerMessage: Cypress.env("message"),
    });
  });
});
