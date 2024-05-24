import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import { CheckboxField } from '../../../../models/formTemplates/types/fields.ts';

interface CheckboxFieldProps {
    field: CheckboxField;
    fieldValue: string[] | undefined;
    handleChange: (value: string | undefined, formFieldName: string) => void;
}

export default function CheckboxFormField(props: CheckboxFieldProps) {
    const { field: checkboxField, fieldValue, handleChange } = props;

    const isSelectedValue = Array.isArray(fieldValue) && fieldValue?.includes(checkboxField.selectedValue);

    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={isSelectedValue}
                    onChange={() => handleChange(checkboxField.selectedValue, checkboxField.formFieldName)}
                />
            }
            label={<Typography>{checkboxField.label}</Typography>}
        />
    );
}
