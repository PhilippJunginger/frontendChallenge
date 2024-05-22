import { StringField } from '../../../models/formTemplates/types/fields.ts';
import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';
import { ChangeEvent } from 'react';

interface StringFieldProps {
    field: StringField;
}

export default function StringFormField(props: StringFieldProps) {
    const { field: stringField } = props;

    const { control, setValue } = useFormContext();
    const controllerName = stringField.formFieldName;

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
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
                    label={stringField.label}
                    type={stringField.inputType ?? 'text'}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message ?? undefined}
                />
            )}
        />
    );
}
