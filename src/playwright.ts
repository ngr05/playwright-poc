import { test as base } from "@playwright/test";
import { cwd } from "process";

import { getProductInTest, ProductDetails } from "./utils/product";
import Home from "./page/Home";
import Login from "./page/Login";

export { expect } from "@playwright/test";

interface CustomFixtures {
    home: Home;
    login: Login;
}

interface CustomWorkerFixtures {
    config: ProductDetails;
}

export const test = base.extend<CustomFixtures, CustomWorkerFixtures>({
    config: [
        async ({}, use) => {
            await use(getProductInTest());
        },
        { scope: "worker" },
    ],

    home: async ({ config, page }, use) => {
        const home = new Home(page);
        home.setBase(config.url);
        await home.goto();
        await home.cookieBanner.dismiss();
        await use(home);
    },
    login: async ({ page }, use) => {
        const login = new Login(page);
        await use(login);
    },
});

test.afterEach(({}, testInfo) => {
    testInfo.attachments.forEach((attachment) => {
        testInfo.annotations.push({
            type: "testrail_attachment",
            description: attachment.path?.replace(`${cwd()}/`, ""),
        });
    });
});

test.afterAll(({}, testInfo) => {
    testInfo.attachments.forEach((attachment) => {
        const description = attachment.path?.replace(`${cwd()}/`, "");
        if (testInfo.annotations.find((annotation) => annotation.description === description)) {
            return;
        }
        testInfo.annotations.push({
            type: "testrail_attachment",
            description,
        });
    });
});
