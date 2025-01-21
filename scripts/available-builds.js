// THIS IS A COPY OF THE SAME FILE FROM GFE FOR USE AS PART OF POC

/**
 * This file exports a list of all available builds
 *
 */
const availableBuilds = [
    /**
     * Betfair builds
     */
    {
        brand: "betfair",
        product: "gaming",
        theme: "gaming",
        subdomain: "casino",
        domain: "betfair",
        tlds: ["com"],
        useStorybook: true,
        // playwrightEnabled: true // Potential new field to determine if the tests are available against the product
    },
    {
        brand: "betfair",
        product: "casino",
        theme: "casino",
        subdomain: "casino",
        domain: "betfair",
        tlds: ["it", "es", "se"],
        useStorybook: true
    },
    {
        brand: "betfair",
        product: "arcade",
        theme: "arcade",
        subdomain: "arcade",
        domain: "betfair",
        tlds: ["com", "se", "es"],
        useStorybook: false
    },
    {
        brand: "betfair",
        product: "vegas-it",
        theme: "vegas-it",
        subdomain: "vegas",
        domain: "betfair",
        tlds: ["it"],
        useStorybook: false
    },
    {
        brand: "betfair",
        product: "xsellexchange",
        theme: "xsellexchange",
        subdomain: "exchangegaming",
        domain: "betfair",
        tlds: ["com", "it", "es", "ro", "se"],
        useStorybook: false
    },
    {
        brand: "betfair",
        product: "xsellsportsbook",
        theme: "xsellsportsbook",
        subdomain: "sportsgaming",
        domain: "betfair",
        tlds: ["com", "it", "es", "ro", "se"],
        useStorybook: false
    },
    {
        brand: "betfair",
        product: "poker",
        theme: "poker",
        subdomain: "poker",
        domain: "betfair",
        tlds: ["com"],
        useStorybook: false
    },
    {
        brand: "betfair",
        product: "vegas-ro",
        theme: "vegas-ro",
        subdomain: "vegas",
        domain: "betfair",
        tlds: ["ro"],
        useStorybook: false
    },
    {
        brand: "betfair",
        product: "pokersg",
        theme: "pokersg",
        subdomain: "pokersg",
        domain: "betfair",
        tlds: ["com"],
        useStorybook: false
    },
    {
        brand: "betfair",
        product: "bingo",
        theme: "bingo",
        subdomain: "bingo",
        domain: "betfair",
        tlds: ["com"],
        useStorybook: false
    },
    {
        brand: "betfair",
        product: "xgames",
        theme: "xgames",
        subdomain: "games",
        domain: "betfair",
        tlds: ["com"],
        useStorybook: false
    },
    {
        brand: "betfair",
        product: "gaming",
        theme: "gaming-br",
        subdomain: "casino",
        domain: "betfair",
        tlds: ["bet.br"],
        useStorybook: false
    },
    {
        brand: "betfair",
        product: "xsellexchange",
        theme: "xsellexchange-br",
        subdomain: "exchangegaming",
        domain: "betfair",
        tlds: ["bet.br"],
        useStorybook: false
    },
    /**
     * Paddypower builds
     */
    {
        brand: "paddypower",
        product: "xsellsportsbook",
        theme: "xsellsportsbook",
        subdomain: "sportsgaming",
        domain: "paddypower",
        tlds: ["com"],
        useStorybook: false
    },
    {
        brand: "paddypower",
        product: "poker",
        theme: "poker",
        subdomain: "poker",
        domain: "paddypower",
        tlds: ["com"],
        useStorybook: false
    },
    {
        brand: "paddypower",
        product: "pokersg",
        theme: "pokersg",
        subdomain: "pokersg",
        domain: "paddypower",
        tlds: ["com"],
        useStorybook: false
    },
    {
        brand: "paddypower",
        product: "bingo",
        theme: "bingo",
        subdomain: "bingo",
        domain: "paddypower",
        tlds: ["com"],
        useStorybook: false
    },
    {
        brand: "paddypower",
        product: "gaming",
        theme: "gaming",
        subdomain: "games",
        domain: "paddypower",
        tlds: ["com"],
        useStorybook: true,
        // playwrightEnabled: true // Potential new field to determine if the tests are available against the product
    },
    /**
     * SkyBet builds
     */
    {
        brand: "skybet",
        product: "vegas",
        theme: "vegas",
        subdomain: "",
        domain: "skyvegas",
        tlds: ["com"],
        useStorybook: true,
        playwrightEnabled: true // Potential new field to determine if the tests are available against the product
    },
    {
        brand: "skybet",
        product: "bingo",
        theme: "bingo",
        subdomain: "",
        domain: "skybingo",
        tlds: ["com"],
        useStorybook: true
    },
    {
        brand: "skybet",
        product: "pokersg",
        theme: "pokersg",
        subdomain: "pokersg",
        domain: "skypoker",
        tlds: ["com"],
        useStorybook: false
    },
    {
        brand: "skybet",
        product: "poker",
        theme: "poker",
        subdomain: "",
        domain: "skypoker",
        tlds: ["com"],
        useStorybook: true
    },
    {
        brand: "skybet",
        product: "casino",
        theme: "casino",
        subdomain: "",
        domain: "skycasino",
        tlds: ["com"],
        useStorybook: true
    }
];
/**
 *
 * @param config
 *  config.brand (String|Regexp) - pattern to match builds based on brand form available builds
 *  config.product (String|Regexp) - pattern to match builds based on product form available builds
 *  config.domain (String|Regexp) - pattern to match builds based on domain form available builds
 * @returns {Array} - return filtered list of builds (
 * if config is null or undefined it will return all available builds)
 */
function getBuilds(config) {
    config = config || {};
    const brand = new RegExp(config.brand || ".*");
    const product = new RegExp(config.product || ".*");
    const theme = new RegExp(config.theme || ".*");
    const subdomain = new RegExp(config.subdomain || ".*");

    return availableBuilds.filter(build => {
        return (
            build.brand.match(brand) &&
            build.product.match(product) &&
            build.theme.match(theme) &&
            build.subdomain.match(subdomain)
        );
    });
}
module.exports = {
    availableBuilds: availableBuilds,
    getBuilds: getBuilds
};
