import { FORM_TYPE, Template } from './types/template';
import { ROW_TYPE } from './types/row';
import { FIELD_TYPE } from './types/fields';
import { SALARY } from '../form/subForms/financialInformationForm';

export const FinancialInformationTemplate: Template = {
    name: 'Financial Information',
    type: FORM_TYPE.FINANCIAL_INFORMATION,
    previousForm: FORM_TYPE.PERSONAL_INFORMATION,
    nextForm: FORM_TYPE.LIVING_SITUATION,
    rows: [
        {
            type: ROW_TYPE.FIELDS,
            fields: [
                {
                    type: FIELD_TYPE.STRING,
                    weight: 12,
                    label: 'Occupation Title',
                    mandatory: true,
                    formFieldName: 'occupationTitle',
                },
            ],
        },
        {
            type: ROW_TYPE.FIELDS,
            fields: [
                {
                    type: FIELD_TYPE.STRING,
                    weight: 12,
                    label: 'Company Name',
                    mandatory: false,
                    formFieldName: 'companyName',
                },
            ],
        },
        {
            type: ROW_TYPE.FIELDS,
            fields: [
                {
                    type: FIELD_TYPE.STRING,
                    weight: 9,
                    label: 'Street',
                    mandatory: false,
                    formFieldName: 'address.street',
                },
                {
                    type: FIELD_TYPE.STRING,
                    weight: 3,
                    label: 'Nr',
                    mandatory: false,
                    formFieldName: 'address.houseNumber',
                },
            ],
        },
        {
            type: ROW_TYPE.FIELDS,
            fields: [
                {
                    type: FIELD_TYPE.STRING,
                    weight: 8,
                    label: 'Postcode',
                    mandatory: false,
                    formFieldName: 'address.postCode',
                },
                {
                    type: FIELD_TYPE.STRING,
                    weight: 4,
                    label: 'Country',
                    mandatory: false,
                    formFieldName: 'address.country',
                },
            ],
        },
        {
            type: ROW_TYPE.HEADER,
            text: 'Monthly income',
        },
        {
            type: ROW_TYPE.FIELDS,
            radioId: 'salary',
            fields: Object.values(SALARY).map((salary) => ({
                type: FIELD_TYPE.RADIO,
                weight: 4,
                label: salary,
                mandatory: true,
                formFieldName: 'salary',
                selectedValue: salary,
            })),
        },
    ],
};
