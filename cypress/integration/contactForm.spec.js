/*
Task: visit https://aluminati.net, browse to the contact form, and fill out the form with whatever details you deem appropriate.
You will not be able to submit the form as it's behind a CAPTCHA, but simply filling out the data is enough for this exercise.
*/

describe('Contact form', () =>
{
	it('should be able to fill out the contact form', () =>
	{

		cy.visit('https://aluminati.net')
		

		//Navigate to contact page
		cy.get('#menu-item-1040 > a > .menu-text').click()
		

		//populate all fields 
		cy.get('.fusion-three-fifth > .fusion-column-wrapper > :nth-child(1) > .wpcf7-form-control-wrap > .wpcf7-form-control').type('Lyle')
		cy.get(':nth-child(2) > .wpcf7-form-control-wrap > .wpcf7-form-control').type('dewetlyle@gmail.com')
		cy.get('.fusion-column-wrapper > :nth-child(3) > .wpcf7-form-control-wrap > .wpcf7-form-control').type('0762787264')
		cy.get(':nth-child(4) > .wpcf7-form-control-wrap > .wpcf7-form-control').type('Stellenbosch University')
		cy.get('.fusion-column-wrapper > :nth-child(5) > .wpcf7-form-control-wrap > .wpcf7-form-control').type('QA Tester')
		cy.get(':nth-child(6) > .wpcf7-form-control-wrap > .wpcf7-select-parent > .wpcf7-form-control').select('100 - 999')
		cy.get('#how-did-you-find').select('Event')
		cy.get(':nth-child(3) > .wpcf7-form-control-wrap > .wpcf7-form-control > .wpcf7-list-item > input').click()
		cy.get('.fusion-one-full > .fusion-column-wrapper > :nth-child(1) > .wpcf7-form-control-wrap > .wpcf7-form-control').type("We enable strong communities by providing platforms where people interact and strengthen their collective sense of community.")
	});
});
