class LoginFragment {
    constructor(page) {
        this.page = page
    }

    async login(username, pass) {
        await this.page.click('.user_buttons button.btn.btn-secondary:nth-child(1)');
        await this.page.fill('.login_form .modal .form-group:nth-child(1) input', username);
        await this.page.fill('.login_form .modal .form-group:nth-child(2) input', pass);
        await this.page.click('.login_form .modal button')
    }
}

module.exports = {
    LoginFragment
};
