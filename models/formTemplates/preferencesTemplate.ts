import { FORM_TYPE, Template } from './types/template';
import { ROW_TYPE } from './types/row';
import { FIELD_TYPE } from './types/fields';
import { PERKS } from '../form/subForms/preferencesForm';

export const PreferencesTemplate: Template = {
    name: 'Preferences',
    type: FORM_TYPE.PREFERENCES,
    previousForm: FORM_TYPE.LIVING_SITUATION,
    rows: [
        {
            type: ROW_TYPE.FIELDS,
            fields: [
                {
                    type: FIELD_TYPE.NUMBER,
                    formFieldName: 'minRent',
                    label: 'Min Rent',
                    weight: 6,
                    mandatory: false,
                },
                {
                    type: FIELD_TYPE.NUMBER,
                    formFieldName: 'maxRent',
                    label: 'Max Rent',
                    weight: 6,
                    mandatory: true,
                },
            ],
        },
        {
            type: ROW_TYPE.FIELDS,
            fields: Object.values(PERKS).map((perk) => ({
                type: FIELD_TYPE.CHECKBOX,
                label: perk,
                formFieldName: 'perks',
                mandatory: true,
                weight: 4,
                selectedValue: perk,
            })),
        },
    ],
};
