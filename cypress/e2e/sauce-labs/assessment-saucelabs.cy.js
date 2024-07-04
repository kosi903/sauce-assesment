describe('MY FIRST TEST SUITE', () => {
    it('My first test case', () => {

      const username = 'standard_user';
    const password = 'secret_sauce';

    // Step1: Navigate to the Sauce Labs Sample Application
      cy.visit("https://www.saucedemo.com/")
      cy.wait(2000)

    // Step2: Enter valid credentials to log in
    cy.get('#user-name').type('standard_user').wait(1000)
    cy.get('#password').type('secret_sauce').wait(1000)
    cy.get('#login-button').click().wait(1000)

    // Step3: Verify that the login is successful and the user is redirected to the products page.
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('contain', 'Products');

    // Step 4: Select a T-shirt by clicking on its image or name.
    cy.get('#item_1_img_link').click().wait(1000)

    // Step 5: Verify that the T-shirt details page is displayed.
    cy.get('.inventory_details_name.large_size').should('contain', 'Sauce Labs Bolt T-Shirt').wait(1000)

    // Step 6: Click the "Add to Cart" button.
    cy.get('#add-to-cart').click().wait(1000)

    // Step 7: Verify that the T-shirt is added to the cart successfully
    cy.get('.shopping_cart_badge').should('contain', '1');

    // Step 8: Navigate to the cart by clicking the cart icon or accessing the cart page directly.
    cy.get('.shopping_cart_link').click().wait(1000)

    // Step 9: Verify that the cart page is displayed
    cy.url().should('include', '/cart.html');
    cy.get('.title').should('contain', 'Your Cart');

    // Step 10: Review the items in the cart and ensure that the T-shirt is listed with the correct details (quantity,name, price,  etc.).
    cy.get('.cart_item').should('have.length', 1);
    cy.get('.inventory_item_name').should('contain', 'Sauce Labs Bolt T-Shirt');
    cy.get('.inventory_item_price').should('contain', '15.99');

    // Step 11: Click the "Checkout" button.
    cy.get('[data-test="checkout"]').click().wait(1000)

    // Step 12: Verify that the checkout information page is displayed
    cy.url().should('include', '/checkout-step-one.html');
    cy.get('.title').should('contain', 'Checkout: Your Information');

    // Step 13: Enter the required checkout information (e.g., name and postal code details).
    cy.get('#first-name').type('user1').wait(1000)
    cy.get('#last-name').type('user2').wait(1000)
    cy.get('#postal-code').type('90001').wait(1000)

    // Step 14: Click the "Continue" button.
    cy.get('#continue').click().wait(1000)

    // Step 15: Verify that the order summary page is displayed
     cy.url().should('include', '/checkout-step-two.html');
     cy.get('.title').should('contain', 'Checkout: Overview');

    //  Step 16: Enter the required checkout information (e.g., name, shipping address, payment details).
    cy.get('.summary_value_label').should('contain', 'SauceCard #31337');
    cy.get('.summary_value_label').should('contain', 'Free Pony Express Delivery!');
    cy.get('.summary_total_label').should('contain', '17.27');

    //  Step 17: Click the "Finish" button.
    cy.get('#finish').click().wait(1000)

    // Step 18: Verify that the order confirmation page is displayed
    cy.url().should('include', '/checkout-complete.html');
    cy.get('.complete-header').should('contain', 'Thank you for your order!');

    // Step 19: Logout from the application.
    cy.get('#react-burger-menu-btn').click().wait(1000)
    cy.get('#logout_sidebar_link').click().wait(1000)

// Step 20: Verify that the user is successfully logged out and redirected to the login page
cy.url().should('include', '/');
cy.get('.login_logo').should('be.visible');


    })
  })