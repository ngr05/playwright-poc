import { Locator } from "@playwright/test";
import ComponentObject from "./Object";

export default class CookieBanner extends ComponentObject {
    public async dismiss(): Promise<void> {
        await this.bannerContainer.waitFor({ state: "visible" });
        await this.acceptAllBtn.click();
        await this.bannerContainer.waitFor({ state: "hidden" });
    }

    /********************************************
     * Locators                                 *
     ********************************************/
    public get bannerContainer(): Locator {
        return this.page.locator("div#onetrust-banner-sdk");
    }

    public get acceptAllBtn(): Locator {
        return this.page.locator("button#onetrust-accept-btn-handler");
    }
}
