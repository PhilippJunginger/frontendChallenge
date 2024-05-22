import { NumberField } from '../../../models/formTemplates/types/fields.ts';
import { Controller, useFormContext } from 'react-hook-form';
import { ChangeEvent } from 'react';
import { TextField } from '@mui/material';

interface NumberFieldProps {
    field: NumberField;
}

export default function NumberFormField(props: NumberFieldProps) {
    const { field: numberField } = props;

    const { control, setValue } = useFormContext();
    const controllerName = numberField.formFieldName;

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = +event.target.value;
        setValue(controllerName, value);
    };

    return (
        <Controller
            control={control}
            name={controllerName}
            render={({ field, fieldState }) => (
                <TextField
                    fullWidth
                    onChange={handleOnChange}
                    inputRef={field.ref}
                    label={numberField.label}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message ?? undefined}
                />
            )}
        />
    );
}
