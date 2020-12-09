const {chromium} = require('playwright');
const {MainPage, TablesPage} = require('../framework');
// const {TablesPage} = require('../framework/pages/tables/index');

const {expect} = require('chai');

describe('Noop spec', function(){
    let browser, page;

    beforeEach(async function() {
        browser = await chromium.launch({headless:false});
        const context = await browser.newContext();
        page = await context.newPage();
        await page.goto('http://localhost:4000/');
    });

    afterEach(async function() {
        await browser.close();
    });

    it('should login', async function(){
        const mainPage = new MainPage(page);
        const tablesPage = new TablesPage(page);
        await mainPage.login('admin', 'admin');
        console.log(await tablesPage.getPageHeaderTitleContent());
        expect(await tablesPage.getPageHeaderTitleContent()).to.includes('admin');
    });

    it('should sign up', async function(){
        const mainPage = new MainPage(page);
        const tablesPage = new TablesPage(page);
        await mainPage.register('admin1', 'admin1', 'admin1@i.com', 'admin1');
        expect(await tablesPage.getPageHeaderTitleContent()).to.includes('admin1');
    })
});
