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

    async getAllDisplayedItems() {
        const items = await this.inventoryItems;
        const results = [];

        for (const item of items) {
            const name = await item.$('.inventory_item_name').getText();
            const description = await item.$('.inventory_item_desc').getText();
            const price = await item.$('.inventory_item_price').getText();

            results.push({ name, description, price });
        }

        return results;
    }
}

module.exports = new InventoryPage();