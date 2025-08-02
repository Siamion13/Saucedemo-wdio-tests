const InventoryPage = require('../pageobjects/inventory_page');
const LoginPage = require('../pageobjects/login_page');
const allure = require('@wdio/allure-reporter')

describe('Login using cookies', () => {
    it('should access inventory page without logging in through UI', async () => {
        allure.startStep('Open login page');
        await browser.url('https://www.saucedemo.com');
        allure.endStep();
        allure.startStep('Set cookie for session-username');
        await browser.setCookies([{
            name: 'session-username',
            value: 'standard_user',
            domain: 'www.saucedemo.com',
            path: '/',
        }]);
        allure.endStep();

        allure.startStep('Navigate to inventory page');
        await browser.url('https://www.saucedemo.com/inventory.html');
        allure.endStep();
        allure.startStep('Verify navigation to inventory page');
        await expect(browser).toHaveUrl(expect.stringContaining('inventory'));
        allure.endStep();
        });

});

describe('Login and sort inventory items', () => {
  before(async () => {
    allure.startStep('Open login page');
    await LoginPage.open();
    allure.endStep();
    allure.startStep('Login with standard_user credentials');
    await LoginPage.login('standard_user', 'secret_sauce');
    allure.endStep();
    allure.startStep('Verify navigation to inventory page');
    await expect(browser).toHaveUrl(expect.stringContaining('inventory'));
    allure.endStep();
  });

  it('should sort inventory items from low price to high price', async () => {
      allure.startStep('Sort items from low to high price');
      await InventoryPage.sortBy('Price (low to high)');
      allure.endStep();

      allure.startStep('Fetch displayed prices');
      const prices = await InventoryPage.getAllDisplayedPrices();
      allure.endStep();

      allure.startStep('Sort prices ascending and verify');
      const sorted = [...prices].sort((a, b) => a - b);
      expect(prices).toEqual(sorted);
      allure.endStep();
    });

  it('should sort inventory items from high price to low price', async () => {
      allure.startStep('Sort items from high to low price');
      await InventoryPage.sortBy('Price (high to low)');
      allure.endStep();
      
      allure.startStep('Fetch displayed prices');
      const prices = await InventoryPage.getAllDisplayedPrices();
      allure.endStep();
      
      allure.startStep('Sort prices descending and verify');
      const sorted = [...prices].sort((a, b) => b - a);
      expect(prices).toEqual(sorted);
      allure.endStep();
  
    });
});