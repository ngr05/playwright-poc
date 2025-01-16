import { Locator, Page } from "@playwright/test";
import PageObject from "./Object";
import { Customer } from "../utils/customer";

export default class Login extends PageObject {
    constructor(page: Page) {
        super(page);
    }

    /********************************************
     * Common interactions                      *
     ********************************************/
    public async go(account: Customer): Promise<void> {
        await this.loginBtn.click();
        
        await this.usernameInput.waitFor({ state: "visible" });
        await this.usernameInput.fill(account.username);
        await this.passwordInput.fill(account.password);
        await this.loginBtn.click();
    }

    /********************************************
     * Locators                                 *
     ********************************************/
    get usernameInput(): Locator {
        return this.page.locator("input#username");
    }

    get passwordInput(): Locator {
        return this.page.locator("input#password");
    }

    get loginBtn(): Locator {
        return this.page.locator('button#login');
    }
}
