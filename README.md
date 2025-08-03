# Saucedemo WebdriverIO Tests

This is a WebdriverIO automation project for testing the SauceDemo web application. The goal of this project is to demonstrate automated testing skills using WebdriverIO, Mocha, and Allure, including test case creation, execution, and reporting.


## Technologies Used

- **JavaScript** – Programming language
- **WebdriverIO** – Web automation framework
- **Mocha** – Test framework
- **Chai** – Assertion library
- **Allure** – Test reporting
- **Node.js** – Runtime environment

## Features
- Login Scenarios
- Inventory Page Verification
- Cart Functionality

## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Siamion13/Saucedemo-wdio-tests.git

2. Navigate to the project directory:

        cd Saucedemo-wdio-tests

3. Install dependencies (Make sure Node.js and npm are installed on your machine):

        npm install

4. Run the Tests

    To run all tests:
   
       npx wdio run ./wdio.conf.js

    To run a specific test file:

        npx wdio run ./wdio.conf.js --spec ./test/specs/test_scenarios_A.spec.js

5. Generate Allure Report:
   
        npx wdio run ./wdio.conf.js --allure

   Serve the report:

       npx allure serve allure-results

   If allure is not recognized, install it globally:

       npm install -g allure-commandline --save-dev

