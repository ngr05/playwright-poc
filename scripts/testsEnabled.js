const { availableBuilds } = require("./available-builds");

// eslint-disable-next-line no-console
console.log(JSON.stringify({ product: availableBuilds.filter(product => product.playwrightEnabled) }, null, 2));
