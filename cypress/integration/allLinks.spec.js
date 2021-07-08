/*
Task: In mobile view, browse to Our services -> Aluminate for education and get the value for every href on every anchor (<a> tag) on the page.
Output the href values to the console. Logging to cypress or the standard dev console is fine.

Please perform this entire task on the mobile site, including the navigation and link data fetching.
*/
describe('Get all links', () => {
	it('should be able to browse to the product page in mobile view and real all links', () => {
		
		//navigate to services -> Aluminate for education
		   cy.visit('https://www.aluminati.net/aluminate-for-education/')


       //Get the value for every href on every anchor
			cy.contains("a", "Book a Demo")
			.scrollIntoView()
      		.should("to.have.attr", "href", "/request-a-demo")
			cy.contains("a", "BOOK A DEMO NOW")
			.scrollIntoView()
      		.should("to.have.attr", "href", "request-a-demo/")
			cy.contains("a", "SEE PARTNERSHIP PROGRAMMES")
			.scrollIntoView()
			.should("to.have.attr", "href", "partners/")
			cy.contains("a", "The Directory")
			.scrollIntoView()
			.should("to.have.attr", "href", "#directory")
			cy.contains("a", "Interactive Chat Messaging")
			.scrollIntoView()
			.should("to.have.attr", "href", "#eMentoring")
			cy.contains("a", "Interactive Chat Messaging")
			.scrollIntoView()
			.should("to.have.attr", "href", "#eMentoring")
			cy.contains("a", "Open Connection Networks")
			.scrollIntoView()
			.should("to.have.attr", "href", "#advancedMentoring")
			cy.contains("a", "Managed Connection Networks")
			.scrollIntoView()
			.should("to.have.attr", "href", "#ambassadors")
			cy.contains("a", "Admissions Ambassadors")
			.scrollIntoView()
			.should("to.have.attr", "href", "#Advanced-Chapter-Management")
			cy.contains("a", "Regional & Interest Groups")
			.scrollIntoView()
			.should("to.have.attr", "href", "#regional-groups")
			cy.contains("a", "Digital library")
			.scrollIntoView()
			.should("to.have.attr", "href", "#digital-library")
			cy.contains("a", "Jobs & Opportunities")
			.scrollIntoView()
			.should("to.have.attr", "href", "#jobs-opportunities")
			cy.contains("a", "Event Promotions")
			.scrollIntoView()
			.should("to.have.attr", "href", "#eventsBoard")
			cy.contains("a", "Social Media Centre")
			.scrollIntoView()
			.should("to.have.attr", "href", "#mediaCentre")
			cy.contains("a", "The Dashboard")
			.scrollIntoView()
			.should("to.have.attr", "href", "#dashboard")
			cy.contains("a", "Customisations")
			.scrollIntoView()
			.should("to.have.attr", "href", "#administrativeFunctions")
			cy.contains("a", "Registration & Identity Validation")
			.scrollIntoView()
			.should("to.have.attr", "href", "#administrativeFunctions")
			cy.contains("a", "Reporting & Monitoring")
			.scrollIntoView()
			.should("to.have.attr", "href", "#administrativeFunctions")
			cy.contains("a", "Data Imports and Exports")
			.scrollIntoView()
			.should("to.have.attr", "href", "#administrativeFunctions")
			cy.contains("a", "SSO & Integrations")
			.scrollIntoView()
			.should("to.have.attr", "href", "#administrativeFunctions")
		});
	});	
