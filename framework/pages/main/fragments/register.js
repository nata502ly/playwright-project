class RegisterFragment {
    constructor(page) {
        this.page = page
    }

    async register(username, ownName, email, pass) {
        await this.page.click('.user_buttons button.btn.btn-secondary:nth-child(2)');
        await this.page.fill('.registration_form .modal .form-group:nth-child(1) input', username);
        await this.page.fill('.registration_form .modal .form-group:nth-child(2) input', ownName);
        await this.page.fill('.registration_form .modal .form-group:nth-child(3) input', email);
        await this.page.fill('.registration_form .modal .form-group:nth-child(4) input', pass);
        await this.page.click('.registration_form .modal button')
    }
}

module.exports = {
    RegisterFragment
};
