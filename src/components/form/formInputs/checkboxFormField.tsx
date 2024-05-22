import { CheckboxField } from '../../../models/formTemplates/types/fields.ts';
import { useFormContext } from 'react-hook-form';
import { ChangeEvent } from 'react';
import { Checkbox, FormControlLabel, Typography } from '@mui/material';

interface CheckboxFieldProps {
    field: CheckboxField;
}

export default function CheckboxFormField(props: CheckboxFieldProps) {
    const { field: checkboxField } = props;

    const { setValue } = useFormContext();
    const controllerName = checkboxField.formFieldName;

    const handleOnClick = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setValue(controllerName, value);
    };

    return (
        <FormControlLabel
            control={<Checkbox onChange={handleOnClick} />}
            label={<Typography>{checkboxField.label}</Typography>}
        />
    );
}
