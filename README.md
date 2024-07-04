# Sauce Labs Application - Login, Logout, Purchase Flow Automation Test

This repository contains an automated test script for the Sauce Labs Application using Cypress. The test covers the full flow from logging in to the application, selecting a product, checking out, and logging out.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed [Node.js](https://nodejs.org/) and npm (Node Package Manager).
- You have installed [Cypress](https://www.cypress.io/) globally on your machine or added it to your project.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-repository/sauce-labs-automation.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd sauce-labs-automation
    ```

3. **Install the dependencies**:
    ```bash
    npm install
    ```

## Running the Test

To run the test, follow these steps:

1. **Open Cypress**:
    ```bash
    npx cypress open
    ```
   This command will open the Cypress Test Runner. From there, you can run the test by selecting the `sauceLabsTest.spec.js` file.

2. **Run Cypress tests in headless mode**:
    ```bash
    npx cypress run
    ```

## Test Scenario

The automated test covers the following steps:

1. Navigate to the Sauce Labs Sample Application (https://www.saucedemo.com/) in Incognito mode.
2. Enter valid credentials to log in:
   - Username: `standard_user`
   - Password: `secret_sauce`
3. Verify that the login is successful and the user is redirected to the products page.
4. Select a T-shirt by clicking on its image or name.
5. Verify that the T-shirt details page is displayed.
6. Click the "Add to Cart" button.
7. Verify that the T-shirt is added to the cart successfully.
8. Navigate to the cart by clicking the cart icon or accessing the cart page directly.
9. Verify that the cart page is displayed.
10. Review the items in the cart and ensure that the T-shirt is listed with the correct details (name, price, quantity, etc.).
11. Click the "Checkout" button.
12. Verify that the checkout information page is displayed.
13. Enter the required checkout information (e.g., name, shipping address, payment details).
14. Click the "Continue" button.
15. Verify that the order summary page is displayed, showing the T-shirt details and the total amount.
16. Click the "Finish" button.
17. Verify that the order confirmation page is displayed, indicating a successful purchase.
18. Logout from the application.
19. Verify that the user is successfully logged out and redirected to the login page.

## Expected Results

- At each step, the expected behavior should be as described.
- The test should run without any errors or exceptions.
- All verification points should pass, ensuring the accuracy of the T-shirt details, cart contents, and successful purchase.

## Troubleshooting

If you encounter any issues while running the test, consider the following:

- Ensure all dependencies are installed by running `npm install`.
- Check that you have the correct version of Node.js and npm installed.
- Review the Cypress documentation for additional troubleshooting steps: [Cypress Docs](https://docs.cypress.io/).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
