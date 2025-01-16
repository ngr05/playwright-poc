export type Customer = {
    username: string;
    password: string;
};

export enum AccountType {
    VALID,
}

export const getAccount = (type: AccountType = AccountType.VALID): Customer => {
    return {
        // brand: "SKYBET",
        // jurisdiction: "COM",
        // currency: "GBP",
        // region: "GBR",
        // country: null,
        // accountId: "715034357",
        username: "PLAYWRIGHTPOC",
        password: "964459",
        // prefix: null,
        // mobilePhoneNumber: null,
        // ownerDetails: null
    };
};

export const releaseAccount = (account: Customer) => {
    console.log(`Releasing account ${account.username}`);
};
