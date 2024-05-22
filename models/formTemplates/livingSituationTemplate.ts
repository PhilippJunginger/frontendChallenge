import { FORM_TYPE, Template } from './types/template';
import { ROW_TYPE } from './types/row';
import { FIELD_TYPE } from './types/fields';

export const LivingSituationTemplate: Template = {
    name: 'Living Situation',
    type: FORM_TYPE.LIVING_SITUATION,
    previousForm: FORM_TYPE.FINANCIAL_INFORMATION,
    nextForm: FORM_TYPE.PREFERENCES,
    rows: [
        {
            type: ROW_TYPE.FIELDS,
            fields: [
                {
                    type: FIELD_TYPE.STRING,
                    weight: 9,
                    label: 'Street',
                    mandatory: true,
                    formFieldName: 'currentAddress.street',
                },
                {
                    type: FIELD_TYPE.STRING,
                    weight: 3,
                    label: 'Nr',
                    mandatory: true,
                    formFieldName: 'currentAddress.houseNumber',
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
                    mandatory: true,
                    formFieldName: 'currentAddress.postCode',
                },
                {
                    type: FIELD_TYPE.STRING,
                    weight: 4,
                    label: 'Country',
                    mandatory: true,
                    formFieldName: 'currentAddress.country',
                },
            ],
        },
        {
            type: ROW_TYPE.FIELDS,
            fields: [
                {
                    type: FIELD_TYPE.TEXTAREA,
                    weight: 4,
                    label: 'Reason for relocation',
                    mandatory: false,
                    formFieldName: 'reasonForRelocation',
                },
            ],
        },
    ],
};
