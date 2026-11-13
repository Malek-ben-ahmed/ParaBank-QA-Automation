import {test, expect} from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { TransferFundsPage } from '../Pages/TransferFundsPage';


test.beforeEach(async ({page}) => {
const loginPage = new LoginPage(page);
await loginPage.login('john','demo');
await page.getByText('Transfer Funds').click();
})
test('TC-12',async ({page})=>{
    
    let transferFundsPage = new TransferFundsPage(page);
    await transferFundsPage.transferFunds('20.00', '12567', '12900');
    await page.waitForSelector('#amountResult');
    const result = page.locator('#amountResult');
    expect(result).toHaveText('$20.00');
    expect(await page.locator('#fromAccountIdResult').textContent()).toBe("12567");
    expect(await page.locator('#toAccountIdResult').textContent()).toBe("12900");

})

test('TC-11',async ({page})=>{
let transferFundsPage = new TransferFundsPage(page);
await transferFundsPage.transferFunds('200.00', '12567', '12900');
await page.waitForSelector('#showError');
expect(await page.locator('#showError').textContent()).toContain('An internal error has occurred and has been logged.'); ;
})
test('TC-13',async({page})=>{
    let transferFundsPage = new TransferFundsPage(page);
    await transferFundsPage.transferFunds('0.00', '12567', '12900');
    await page.waitForSelector('#showError');
expect(await page.locator('#showError').textContent()).toContain('An internal error has occurred and has been logged.') ;
})
test('TC-14',async({page})=>{
    let transferFundsPage = new TransferFundsPage(page);
    await transferFundsPage.transferFunds('100.00', '12567', '12567');
    await page.waitForSelector('#showError');
expect(await page.locator('#showError').textContent()).toContain('An internal error has occurred and has been logged.'); ;
})
test('TC-15',async({page})=>{
let transferFundsPage = new TransferFundsPage(page);
await transferFundsPage.transferFunds('', '12567', '12900');
await page.waitForSelector('#showError');
expect( await page.locator('#showError')).toContainText('Error!');
expect( await page.locator('#showError').textContent()).toContain('An internal error has occurred and has been logged.');
})
test('TC-16',async({page})=>{
    let transferFundsPage = new TransferFundsPage(page);
    await transferFundsPage.transferFunds('-20.00', '12567', '12900');
    await page.waitForSelector('#showError');
expect(await page.locator('#showError').textContent()).toContain('An internal error has occurred and has been logged.') ;
})