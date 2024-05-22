import { Row } from './row';

export enum FORM_TYPE {
    PERSONAL_INFORMATION = 'PERSONAL_INFORMATION',
    FINANCIAL_INFORMATION = 'FINANCIAL_INFORMATION',
    LIVING_SITUATION = 'LIVING_SITUATION',
    PREFERENCES = 'PREFERENCES',
}

export type Template = {
    name: string;
    type: FORM_TYPE;
    previousForm?: FORM_TYPE;
    nextForm?: FORM_TYPE;
    rows: Row[];
};
