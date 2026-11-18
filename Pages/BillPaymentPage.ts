import { Page } from '@playwright/test';

export class BillPaymentPage {
  Page: Page;
  constructor(Page:Page){
    this.Page=Page;
  }
  async FillForm(PName:string,Adress:string,City:string,State:string,ZipCode:string,Phone:string,toAccount:string,Amount:string,fromAccount:string){
         await this.Page.locator('input[name="payee.name"]').fill(PName)
         await this.Page.locator('input[name="payee.address.street"]').fill(Adress)
         await this.Page.locator('input[name="payee.address.city"]').fill(City)
         await this.Page.locator('input[name="payee.address.state"]').fill(State)
         await this.Page.locator('input[name="payee.address.zipCode"]').fill(ZipCode)
         await this.Page.locator('input[name="payee.phoneNumber"]').fill(Phone)
         await this.Page.locator('input[name="payee.accountNumber"]').fill(toAccount)
         await this.Page.locator('input[name="verifyAccount"]').fill(toAccount)
         await this.Page.locator('input[name="amount"]').fill(Amount)
         await this.Page.locator('select[name="fromAccountId"]').selectOption(fromAccount)
         await this.Page.locator('input[value="Send Payment"]').click()
         
  }
}