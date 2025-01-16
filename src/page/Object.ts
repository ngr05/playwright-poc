import { Locator, Page } from "@playwright/test";
import CookieBanner from "../component/CookieBanner";
import { Customer } from "../utils/customer";

export default class PageAbstract {
    private base: string;
    readonly page: Page;

    readonly cookieBanner: CookieBanner

    constructor(page: Page) {
        this.page = page;

        this.cookieBanner = new CookieBanner(page);
    }

    public async goto(path: string = "/") {
        await this.page.goto(`${this.base}${path}`);
    }

    public setBase(base: string): PageAbstract {
        this.base = base;
        return this;
    }

    /********************************************
     * Locators                                 *
     ********************************************/
    get loginBtn(): Locator {
        return this.page.locator('a[data-gtml="Log In"]');
    }
    
    get balanceDisplay(): Locator {
        return this.page.locator("div.ssc-wlc");
    }
    
    get myAccountBtn(): Locator {
        return this.page.locator("span.ssc-un");
    }

    get logoutBtn(): Locator {
        return this.page.locator('input[type="submit"]');
        // This needs a better locator
    }

    /********************************************
     * Common interactions                      *
     ********************************************/

    public async logout() {
        await this.myAccountBtn.click();
        await this.logoutBtn.click();
    }
}
