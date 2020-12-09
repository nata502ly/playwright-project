const {waits} = require('../../../lib');

class TablesPage{
    constructor(page) {
        this.page = page
    }

    async getPageHeaderTitleContent(){
        await waits(this.page).waitVisibility('.header h3');
        const elementHandle = await this.page.$('.header h3');
        return elementHandle.textContent();
    }
}

module.exports={
    TablesPage
};
