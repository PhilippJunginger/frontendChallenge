import { Row } from './row';

export enum FORM_TYPE {
    PERSONAL_INFORMATION = 'personal',
    FINANCIAL_INFORMATION = 'financial',
    LIVING_SITUATION = 'living',
    PREFERENCES = 'preferences',
}

export type Template = {
    name: string;
    type: FORM_TYPE;
    previousForm?: FORM_TYPE;
    nextForm?: FORM_TYPE;
    rows: Row[];
};
