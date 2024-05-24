import { Checkbox, FormControlLabel } from '@mui/material';
import { CheckboxField } from '../../../../models/formTemplates/types/fields.ts';

interface CheckboxFieldProps {
    field: CheckboxField;
    fieldValue: string[] | undefined;
    handleChange: (value: string | undefined, formFieldName: string) => void;
    isSummary?: boolean;
}

export default function CheckboxFormField(props: CheckboxFieldProps) {
    const { field: checkboxField, fieldValue, handleChange, isSummary } = props;

    const isSelectedValue = Array.isArray(fieldValue) && fieldValue?.includes(checkboxField.selectedValue);

    return (
        <FormControlLabel
            disabled={isSummary}
            control={
                <Checkbox
                    checked={isSelectedValue}
                    onChange={() => handleChange(checkboxField.selectedValue, checkboxField.formFieldName)}
                />
            }
            label={checkboxField.label}
        />
    );
}
