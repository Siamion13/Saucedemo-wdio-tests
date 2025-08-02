const LoginPage = require('../pageobjects/login_page');
const InventoryPage = require('../pageobjects/inventory_page');
const allure = require('@wdio/allure-reporter')

describe('Login, Add all items to cart and then remove them', () => {
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

  it('should add all items to cart and show correct cart count', async () => {
    allure.startStep('Add all items to cart');
    await InventoryPage.addAllItemsToCart();
    allure.endStep();
    allure.startStep('Verify that there is correct number of items in the cart');
    const cartCount = await InventoryPage.getCartCount();
    expect(cartCount).toBe(6);
    allure.endStep();
  });

  it('should remove all items from cart and show correct cart count', async () => {
    allure.startStep('Remove all items from cart');
    await InventoryPage.removeAllItemsFromCart();
    allure.endStep();
    allure.startStep('Verify that there are no items in the cart');
    const isBadgeDisplayed = await InventoryPage.isCartBadgeDisplayed();
    expect(isBadgeDisplayed).toBe(false)
    allure.endStep();
  });
});