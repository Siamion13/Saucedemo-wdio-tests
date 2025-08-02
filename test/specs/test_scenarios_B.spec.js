const LoginPage = require('../pageobjects/login_page');
const InventoryPage = require('../pageobjects/inventory_page');
const { expectedItems } = require('../../utils/testdata');
const allure = require('@wdio/allure-reporter')


describe('Login, check that items has correct title, description and price', () => {
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

  it('should check that items has correct title', async () => {
    allure.startStep('Fetch all displayed inventory items');
    const actualItems = await InventoryPage.getAllDisplayedItems();
    allure.endStep();
    allure.startStep('Compare number of actual and expected items');
    expect(actualItems.length).toBe(expectedItems.length);
    
    for (let i = 0; i < actualItems.length; i++) {
    expect(actualItems[i].name).toBe(expectedItems[i].name)
    }
    allure.endStep();
  });

  it('should check that items has correct description', async () => {
    allure.startStep('Fetch all displayed inventory items');
    const actualItems = await InventoryPage.getAllDisplayedItems();
    allure.endStep();
    allure.startStep('Compare number of actual and expected items');
    expect(actualItems.length).toBe(expectedItems.length);

    for (let i = 0; i < actualItems.length; i++) {
    expect(actualItems[i].description).toBe(expectedItems[i].description)
    }
    allure.endStep();
  });

  it('should check that items has correct price', async () => {
    allure.startStep('Fetch all displayed inventory items');
    const actualItems = await InventoryPage.getAllDisplayedItems();
    allure.endStep();
    allure.startStep('Compare number of actual and expected items');
    expect(actualItems.length).toBe(expectedItems.length);
    
    for (let i = 0; i < actualItems.length; i++) {
    expect(actualItems[i].price).toBe(expectedItems[i].price)
    }
    allure.endStep();
  });
});