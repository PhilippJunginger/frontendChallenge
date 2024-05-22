import { RadioField } from '../../../models/formTemplates/types/fields.ts';
import { useFormContext } from 'react-hook-form';
import { ChangeEvent } from 'react';
import { FormControlLabel, Radio, Typography } from '@mui/material';

interface RadioFieldProps {
    field: RadioField;
}

export default function RadioFormField(props: RadioFieldProps) {
    const { field: radioField } = props;

    const { setValue } = useFormContext();
    const controllerName = radioField.formFieldName;

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setValue(controllerName, value);
    };

    return (
        <FormControlLabel
            control={<Radio onChange={handleOnChange} />}
            label={<Typography>{radioField.label}</Typography>}
        />
    );
}
