import { expect,selectors,test } from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";
import { BillPaymentPage } from "../Pages/BillPaymentPage";

test.beforeEach(async ({ page })=>{
 const loginPage=new LoginPage(page)
 const billPaymentPage=new BillPaymentPage(page)
 await loginPage.login('john','demo');
 await page.goto('https://parabank.parasoft.com/parabank/billpay.htm')
})
test('TC-BP-01',async ({page})=>{
const billPaymentPage=new BillPaymentPage(page)
await billPaymentPage.FillForm("John Smith","123 Main Street","New York","NY","10001","2125551234","12768","20.00","13344")
await page.waitForSelector("#billpayResult")
expect(await page.locator("#billpayResult").textContent()).toContain("Bill Payment Complete")
})
test('TC-BP-02',async ({page})=>{
const billPaymentPage=new BillPaymentPage(page)
await billPaymentPage.FillForm("John Smith","123 Main Street","New York","NY","ABCDE","2125551234","12768","20.00","13344")
await page.waitForSelector("#validationModel-zipCode-invalid")
expect(await page.locator("#validationModel-zipCode-invalid").textContent()).toContain("Please enter a valid Zip Code.")

})
test('TC-BP-03',async ({page})=>{
const billPaymentPage=new BillPaymentPage(page)
await billPaymentPage.FillForm("John Smith","123 Main Street","New York","NY","10001","ABC12345","12768","20.00","13344")
await page.waitForSelector("#validationModel-phoneNumber-invalid")
expect(await page.locator("#validationModel-phoneNumber-invalid").textContent()).toContain("Please enter a valid Phone number.")
})
test('TC-BP-04',async ({page})=>{
const billPaymentPage=new BillPaymentPage(page)
await billPaymentPage.FillForm("John Smith","123 Main Street","New York","NY","10001","2125551234","ABC12345","20.00","13344")
await page.waitForSelector("#validationModel-account-invalid")
expect(await page.locator("#validationModel-account-invalid").textContent()).toContain("Please enter a valid number.")

})
test('TC-BP-05',async ({page})=>{
const billPaymentPage=new BillPaymentPage(page)
await billPaymentPage.FillForm("","123 Main Street","New York","NY","10001","2125551234","12768","20.00","13344")
await page.waitForSelector("#validationModel-name")
expect(await page.locator("#validationModel-name").textContent()).toContain("Payee name is required.")

})
test('TC-BP-06',async ({page})=>{
const billPaymentPage=new BillPaymentPage(page)
await billPaymentPage.FillForm("John Smith","123 Main Street","New York","NY","10001","2125551234","12768","200.00","14232")
await page.waitForSelector("#billpayError")
expect(await page.locator("#billpayError").textContent()).toContain("Error!")
expect(await page.locator("#billpayError").textContent()).toContain("Insufficient funds in the account!")

})
test('TC-BP-07',async ({page})=>{
const billPaymentPage=new BillPaymentPage(page)
await billPaymentPage.FillForm("John Smith","123 Main Street","New York","NY","10001","2125551234","12768","0.00","13344")
await page.waitForSelector("#validationModel-amount-invalid")
expect(await page.locator("validationModel-amount-invalid").textContent()).toContain("Please enter a valid amount.")
})
test('TC-BP-08',async ({page})=>{
const billPaymentPage=new BillPaymentPage(page)
await billPaymentPage.FillForm("John Smith","123 Main Street","New York","NY","10001","2125551234","12768","-10.00","13344")
await page.waitForSelector("#validationModel-amount-invalid")
expect(await page.locator("validationModel-amount-invalid").textContent()).toContain("Please enter a valid amount.")
})
