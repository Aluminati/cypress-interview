// User Navigate to Aluminati website and fill in the Contact Us form
Cypress.Commands.add(
  "contactus",
  ({
    fullName, customerEmail, phoneNumber, customerOrganisation, jobTitle, customerMessage }) => {
    cy.visit(`/`);
    cy.get("#menu-item-17180").click();
    cy.get('input[name="your-name"]').click().type(fullName);
    cy.get('input[name="your-email"]').click().type(customerEmail);
    cy.get('input[name="your-phone"]').click().type(phoneNumber);
    cy.get('input[name="your-organisation"]').click().type(customerOrganisation);
    cy.get('input[name="your-job"]').click().type(jobTitle);
    cy.get('textarea[name="your-message"]').click().type(customerMessage);
  }
);
