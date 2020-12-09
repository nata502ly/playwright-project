const {waits} = require('../../../lib');

class TablesPage{
    constructor(page) {
        this.page = page
    }
    
    async getPageHeaderTitleContent(){
        await waits(this.page).waitVisibility('.header h3');
        // await this.page.waitForSelector('.header h3', {state: "visible"});
        const elementHandle = await this.page.$('.header h3');
        return elementHandle.textContent();
    }
}

module.exports={
    TablesPage
};
