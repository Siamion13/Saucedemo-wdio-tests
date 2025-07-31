class InventoryPage {
    get inventoryItems() {
        return $$('.inventory_item');
    }

    get addToCartButtons() {
        return $$('button.btn_primary');
    }

    get removeButtons() {
        return $$('button.btn_secondary');
    }

    get cartIconBadge() {
        return $('.shopping_cart_badge');
    }

    async addAllItemsToCart() {
        const buttons = await this.addToCartButtons;
        for (let i = 0; i < buttons.length; i++) {
            await buttons[i].click();
        }
    }

    async removeAllItemsFromCart() {
        const buttons = await this.removeButtons;
        for (let i = 0; i < buttons.length; i++) {
            await buttons[i].click();
        }
    }

    async getCartCount() {
        if (await this.cartIconBadge.isDisplayed()) {
            return parseInt(await this.cartIconBadge.getText());
        }
        return 0;
    }

    async isCartBadgeDisplayed() {
        return await this.cartIconBadge.isDisplayed();

    }
}

module.exports = new InventoryPage();