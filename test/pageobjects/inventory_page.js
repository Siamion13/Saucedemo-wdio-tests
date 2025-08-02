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

    get sortingDropdown() {
        return $('.product_sort_container');
    }

    get itemPrices() {
        return $$('.inventory_item_price');
    }

    async sortBy(value) {
        await this.sortingDropdown.selectByVisibleText(value);
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

    async getAllDisplayedPrices() {
        const prices = await this.itemPrices;
        const results = [];

        for (const price of prices) {
            const text = await price.getText();
            const value = parseFloat(text.replace('$', ''));
            results.push(value);
        }

        return results;
    }
}

module.exports = new InventoryPage();