class LoginPage {
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button');
    }

    get errorToast () {
        return $('h3[data-test="error"]');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async getErrorMessage () {
        return await this.errorToast.getText()
    }

    async isErrorVisible() {
        return await this.errorToast.isDisplayed();

    }

    open () {
        return browser.url('https://www.saucedemo.com/');
    }
}

module.exports = new LoginPage();

