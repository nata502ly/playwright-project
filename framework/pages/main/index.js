const {LoginFragment} = require('./fragments/login');
const {RegisterFragment} = require('./fragments/register');


class MainPage {
    constructor(page) {
        this.loginFragment = new LoginFragment(page);
        this.registerFragment = new RegisterFragment(page);

    }

    async login(username, pass) {
        await this.loginFragment.login(username, pass)
    }

    async register(username, ownName, email, pass) {
        await this.registerFragment.register(username, ownName, email, pass)
    }

}

module.exports = {
    MainPage
};
