const LoginPage = require('../pageobjects/login_page');
const InventoryPage = require('../pageobjects/inventory_page');
const { expectedItems } = require('../../utils/testdata');


describe('Login, check that items has correct title, description and price', () => {
  before(async () => {
   await LoginPage.open();
   await LoginPage.login('standard_user', 'secret_sauce');
   await expect(browser).toHaveUrl(expect.stringContaining('inventory'));
  });

  it('should check that items has correct title', async () => {
    const actualItems = await InventoryPage.getAllDisplayedItems();
    expect(actualItems.length).toBe(expectedItems.length);

    for (let i = 0; i < actualItems.length; i++) {
    expect(actualItems[i].name).toBe(expectedItems[i].name)
    }

  });

  it('should check that items has correct description', async () => {
    const actualItems = await InventoryPage.getAllDisplayedItems();
    expect(actualItems.length).toBe(expectedItems.length);

    for (let i = 0; i < actualItems.length; i++) {
    expect(actualItems[i].description).toBe(expectedItems[i].description)
    }

  });

  it('should check that items has correct price', async () => {
    const actualItems = await InventoryPage.getAllDisplayedItems();
    expect(actualItems.length).toBe(expectedItems.length);

    for (let i = 0; i < actualItems.length; i++) {
    expect(actualItems[i].price).toBe(expectedItems[i].price)
    }

  });
});