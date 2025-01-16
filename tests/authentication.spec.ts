import { expect } from "@playwright/test";
import { test } from "../src/playwright";
import { getAccount } from "../src/utils/customer";

test.describe("Authentication tests", () => {
    test("login", async ({ home, login }, testInfo) => {
        testInfo.annotations.push({ type: "testrail_case_field", description: "ref:GUT-1" });
        testInfo.annotations.push({ type: "testrail_result_comment", description: "1. go to the portal" });
        testInfo.annotations.push({ type: "testrail_result_comment", description: "2. hit the login button" });
        testInfo.annotations.push({
            type: "testrail_result_comment",
            description: "3. input valid use details",
        });
        await home.loginBtn.click();
        await login.go(getAccount());

        testInfo.annotations.push({
            type: "testrail_result_comment",
            description: "4. check that the user's balance and my account is displayed",
        });
        await expect(home.balanceDisplay).toBeVisible();
        await expect(home.myAccountBtn).toBeVisible();
    });

    test("logout", async ({ home, login }, testInfo) => {
        testInfo.annotations.push({ type: "testrail_case_field", description: "ref:GUT-1" });
        // Login
        testInfo.annotations.push({ type: "testrail_result_comment", description: "1. go to the portal" });
        testInfo.annotations.push({ type: "testrail_result_comment", description: "2. log in" });
        await home.loginBtn.click();
        await login.go(getAccount());

        // Logout
        testInfo.annotations.push({ type: "testrail_result_comment", description: "3. log out from the product" });
        await home.logout();

        testInfo.annotations.push({
            type: "testrail_result_comment",
            description: "4. check that there is no balance or my account but there is a login button",
        });
        await expect(home.loginBtn).toBeVisible();
        await expect(home.balanceDisplay).toBeHidden();
        await expect(home.myAccountBtn).toBeHidden();
    });
});
