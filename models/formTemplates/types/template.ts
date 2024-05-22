import { Row } from './row';

export enum FORM_TYPE {
    PERSONAL_INFORMATION,
    FINANCIAL_INFORMATION,
    LIVING_SITUATION,
    PREFERENCES,
}

export type Template = {
    name: string;
    type: FORM_TYPE;
    rows: Row[];
};
