const LoginPage = require('../pageobjects/login_page');
const InventoryPage = require('../pageobjects/inventory_page');

describe('Add all items to cart and then remove them', () => {
  before(async () => {
    await LoginPage.open();
    await LoginPage.login('standard_user', 'secret_sauce');
    await expect(browser).toHaveUrl(expect.stringContaining('inventory'));
  });

  it('should add all items to cart and show correct cart count', async () => {
    await InventoryPage.addAllItemsToCart();
    const cartCount = await InventoryPage.getCartCount();
    expect(cartCount).toBe(6);
  });

  it('should remove all items from cart and show correct cart count', async () => {
    await InventoryPage.removeAllItemsFromCart();
    const isBadgeDisplayed = await InventoryPage.isCartBadgeDisplayed();
    expect(isBadgeDisplayed).toBe(false)
  });
});