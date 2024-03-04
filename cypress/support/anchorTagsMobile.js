Cypress.Commands.add(
    "anchortags",
    ({

    }) => {

        cy.viewport('iphone-6');

        // Visit the webpage Aluminate for Education
        cy.visit('/aluminate-for-education-alumni-engagement-software/');

        // Wait for the page to load
        cy.wait(2000); // Adjust the wait time as necessary

              // Get all anchor tags and extract href values
              cy.get('a').each(($a) => {
                const href = $a.attr('href');
                if (href) {
                  // Output href values to the Cypress command log
                  cy.log(`Href value: ${href}`);
                  // Alternatively, you can output to the standard dev console
                  cy.window().then((win) => {
                    win.console.log(`Href value: ${href}`);
                  });
                }
        });
    }
);
