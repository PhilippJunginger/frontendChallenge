export enum FIELD_TYPE {
    STRING = 'STRING',
    NUMBER = 'NUMBER',
    RADIO = 'RADIO',
    CHECKBOX = 'CHECKBOX',
}

export type StringField = {
    type: FIELD_TYPE.STRING;
    weight: number;
    mandatory: boolean;
    label: string;
};

export type NumberField = {
    type: FIELD_TYPE.NUMBER;
    weight: number;
    mandatory: boolean;
    label: string;
};

export type RadioField = {
    type: FIELD_TYPE.RADIO;
    weight: number;
    mandatory: boolean;
    label: string;
    selectedValue: string;
};

export type CheckboxField = {
    type: FIELD_TYPE.CHECKBOX;
    weight: number;
    mandatory: boolean;
    label: string;
    selectedValue: string;
};
