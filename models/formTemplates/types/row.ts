import { FormField } from './fields';

export enum ROW_TYPE {
    FIELDS,
}

export type Row = FieldRow;

export type FieldRow = {
    type: ROW_TYPE.FIELDS;
    fields: FormField[];
};
