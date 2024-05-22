export enum FIELD_TYPE {
    STRING = 'STRING',
    NUMBER = 'NUMBER',
    RADIO = 'RADIO',
    CHECKBOX = 'CHECKBOX',
    TEXTAREA = 'TEXTAREA',
}

type BaseField = {
    type: FIELD_TYPE;
    formFieldName: string;
    mandatory: boolean;
    label: string;
    weight: number;
};

export interface StringField extends BaseField {
    type: FIELD_TYPE.STRING;
    inputType?: 'tel' | 'email' | 'text';
}

export interface TextAreaField extends BaseField {
    type: FIELD_TYPE.TEXTAREA;
}

export interface NumberField extends BaseField {
    type: FIELD_TYPE.NUMBER;
}

export interface RadioField extends BaseField {
    type: FIELD_TYPE.RADIO;
    selectedValue: string;
}

export interface CheckboxField extends BaseField {
    type: FIELD_TYPE.CHECKBOX;
    selectedValue: string;
}
