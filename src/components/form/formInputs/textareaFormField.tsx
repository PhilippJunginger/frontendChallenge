import { TextAreaField } from '../../../models/formTemplates/types/fields.ts';
import { Controller, useFormContext } from 'react-hook-form';
import { ChangeEvent } from 'react';
import { TextField } from '@mui/material';

interface TextAreaFieldProps {
    field: TextAreaField;
}

export default function TextAreaFormField(props: TextAreaFieldProps) {
    const { field: textAreaField } = props;

    const { control, setValue } = useFormContext();
    const controllerName = textAreaField.formFieldName;

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
                    multiline
                    minRows={5}
                    maxRows={5}
                    label={textAreaField.label}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message ?? undefined}
                />
            )}
        />
    );
}
