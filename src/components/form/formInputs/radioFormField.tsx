import { FormControlLabel, Radio } from '@mui/material';
import { RadioField } from '../../../../models/formTemplates/types/fields.ts';

interface RadioFieldProps {
    field: RadioField;
    fieldValue: string | undefined;
    handleChange: (value: string, formFieldName: string) => void;
    isSummary?: boolean;
}

export default function RadioFormField(props: RadioFieldProps) {
    const { field: radioField, fieldValue, handleChange, isSummary } = props;

    const isSelectedValue = fieldValue == radioField.selectedValue;

    return (
        <FormControlLabel
            disabled={isSummary}
            control={
                <Radio
                    checked={isSelectedValue}
                    name={radioField.formFieldName}
                    onChange={() => handleChange(radioField.selectedValue, radioField.formFieldName)}
                />
            }
            label={radioField.label}
        />
    );
}
