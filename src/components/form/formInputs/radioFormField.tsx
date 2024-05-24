import { FormControlLabel, Radio, Typography } from '@mui/material';
import { RadioField } from '../../../../models/formTemplates/types/fields.ts';

interface RadioFieldProps {
    field: RadioField;
    fieldValue: string | undefined;
    handleChange: (value: string, formFieldName: string) => void;
}

export default function RadioFormField(props: RadioFieldProps) {
    const { field: radioField, fieldValue, handleChange } = props;

    const isSelectedValue = fieldValue == radioField.selectedValue;

    return (
        <FormControlLabel
            control={
                <Radio
                    checked={isSelectedValue}
                    name={radioField.formFieldName}
                    onChange={() => handleChange(radioField.selectedValue, radioField.formFieldName)}
                />
            }
            label={<Typography>{radioField.label}</Typography>}
        />
    );
}
