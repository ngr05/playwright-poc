export enum Environment {
    LOCAL = "local",
    GMMASTER = "gmmaster",
    BRANCH = "branch",
    NXT = "nxt",
    DRK = "drk",
    PROD = "prod"
}

export const getUrl = (build): string => {
    const { ENVIRONMENT, LOCAL, JURISDICTION } = process.env;

    if (!ENVIRONMENT) {
        throw new Error("ENVIRONMENT environment variable must be set");
    }

    let url = `http${LOCAL ? "" : "s"}://`;
    url = `${url}${LOCAL ? "local-" : ""}`;
    url = build.subdomain !== "" ? `${url}${build.subdomain}.` : url;
    url = `${url}${build.domain}`;
    url = `${url}.${build.tlds.length === 1 ? build.tlds[0] : JURISDICTION}`;
    if (!isProd) {
        url = `${url}.${ENVIRONMENT}.ppbdev.com`;
    }
    return url;
};

const isProd = process.env.ENVIRONMENT === Environment.PROD || process.env.ENVIRONMENT === Environment.DRK;
