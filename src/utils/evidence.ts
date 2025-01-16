import { TestInfo } from "@playwright/test";

export interface Evidence {
    setReference: (reference: string, testInfo: TestInfo) => void;
    addStep: (description: string, testInfo: TestInfo) => void;
}

export const setReference = (reference: string, testInfo: TestInfo) => {
    // Could validated ticket number here
    testInfo.annotations.push({ type: 'testrail_case_field', description: `ref:${reference}` });
};

export const addStep = (description: string, testInfo: TestInfo) => {
    testInfo.annotations.push({ type: 'testrail_result_comment', description });
};