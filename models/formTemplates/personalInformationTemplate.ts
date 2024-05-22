import { FORM_TYPE, Template } from './types/template';
import { ROW_TYPE } from './types/row';
import { FIELD_TYPE } from './types/fields';

export const PersonalInformationTemplate: Template = {
    name: 'Personal Information',
    type: FORM_TYPE.PERSONAL_INFORMATION,
    rows: [
        {
            type: ROW_TYPE.FIELDS,
            fields: [
                {
                    type: FIELD_TYPE.STRING,
                    weight: 6,
                    label: 'Firstname',
                    mandatory: true,
                    formFieldName: 'firstName',
                },
                {
                    type: FIELD_TYPE.STRING,
                    weight: 6,
                    label: 'Firstname',
                    mandatory: true,
                    formFieldName: 'lastName',
                },
            ],
        },
        {
            type: ROW_TYPE.FIELDS,
            fields: [
                {
                    type: FIELD_TYPE.STRING,
                    weight: 6,
                    label: 'Firstname',
                    mandatory: true,
                    formFieldName: 'firstName',
                },
                {
                    type: FIELD_TYPE.STRING,
                    weight: 6,
                    label: 'Firstname',
                    mandatory: true,
                    formFieldName: 'lastName',
                },
            ],
        },
        {
            type: ROW_TYPE.FIELDS,
            fields: [
                {
                    type: FIELD_TYPE.STRING,
                    weight: 12,
                    label: 'Email',
                    mandatory: true,
                    formFieldName: 'eMail',
                    inputType: 'email',
                },
            ],
        },
        {
            type: ROW_TYPE.FIELDS,
            fields: [
                {
                    type: FIELD_TYPE.STRING,
                    weight: 6,
                    label: 'phone',
                    mandatory: true,
                    formFieldName: 'phone',
                    inputType: 'tel',
                },
            ],
        },
    ],
};
