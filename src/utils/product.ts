import { TestInfo } from "playwright/test";

import { test } from "../playwright";
import { getUrl } from "./environment";
import { availableBuilds } from "../../scripts/available-builds";

export enum Brand {
    BF = "betfair",
    PP = "paddypower",
    SBG = "skybet"
}

export enum Product {
    BINGO = "bingo",
    CASINO = "casino",
    GAMING = "gaming",
    POKER = "poker",
    VEGAS = "vegas"
}

export interface ProductDetails {
    brand: Brand;
    product: Product;
    url: string;
}

export const getProductInTest = (): ProductDetails => {
    const { BRAND, PRODUCT } = process.env;
    if (!BRAND || !PRODUCT) {
        throw new Error("BRAND and PRODUCT environment variables must be set");
    }
    const build = availableBuilds.find((build) => build.brand === BRAND && build.product === PRODUCT);
    if (!build) {
        throw new Error(`No build found for ${BRAND} ${PRODUCT}`);
    }
    return {
        brand: Brand[build.brand as keyof typeof Brand],
        product: Product[build.product as keyof typeof Product],
        url: getUrl(build),
    };
};

export const skipOn = (product: Product | Product[], reason: string, testInfo: TestInfo) => {
    testInfo.annotations.push({
        type: "testrail_result_comment",
        description: `skipping test on ${process.env.PRODUCT}; ${reason}`
    });
    if (!Array.isArray(product)) {
        product = [product];
    }
    test.skip(product.includes(process.env.PRODUCT as Product), reason);
};
