import CheckboxFormField from './formInputs/checkboxFormField.tsx';
import NumberFormField from './formInputs/numberFormField.tsx';
import RadioFormField from './formInputs/radioFormField.tsx';
import StringFormField from './formInputs/stringFormField.tsx';
import TextAreaFormField from './formInputs/textareaFormField.tsx';
import { Grid } from '@mui/material';
import { Row } from '../../../models/formTemplates/types/row.ts';
import { FIELD_TYPE, FormField } from '../../../models/formTemplates/types/fields.ts';

interface FormRowProps {
    row: Row;
}

export default function FormRow(props: FormRowProps) {
    const { row } = props;

    const handleRenderField = (field: FormField) => {
        switch (field.type) {
            case FIELD_TYPE.CHECKBOX:
                return <CheckboxFormField field={field} />;
            case FIELD_TYPE.NUMBER:
                return <NumberFormField field={field} />;
            case FIELD_TYPE.RADIO:
                return <RadioFormField field={field} />;
            case FIELD_TYPE.STRING:
                return <StringFormField field={field} />;
            case FIELD_TYPE.TEXTAREA:
                return <TextAreaFormField field={field} />;
        }
    };

    return (
        <Grid item width={1} container spacing={1} xs={12}>
            {row.fields.map((field) => (
                <Grid width={1} item xs={12} md={field.weight}>
                    {handleRenderField(field)}
                </Grid>
            ))}
        </Grid>
    );
}
