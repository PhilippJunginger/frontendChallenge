import { FormField } from './fields';

export enum ROW_TYPE {
    FIELDS,
    HEADER,
}

export type Row = FieldRow | HeaderRow;

export type FieldRow = {
    type: ROW_TYPE.FIELDS;
    fields: FormField[];
    radioId?: string;
};

export type HeaderRow = {
    type: ROW_TYPE.HEADER;
    text: string;
};
