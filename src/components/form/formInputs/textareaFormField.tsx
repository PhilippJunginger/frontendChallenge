import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';
import { TextAreaField } from '../../../../models/formTemplates/types/fields.ts';

interface TextAreaFieldProps {
    field: TextAreaField;
    fieldValue: string | undefined;
    optionalLabel: string;
    handleChange: (value: string | undefined, formFieldName: string) => void;
}

export default function TextAreaFormField(props: TextAreaFieldProps) {
    const { field: textAreaField, fieldValue, optionalLabel, handleChange } = props;

    const { control } = useFormContext();
    const controllerName = textAreaField.formFieldName;

    return (
        <Controller
            control={control}
            name={controllerName}
            render={({ field, fieldState }) => (
                <TextField
                    fullWidth
                    value={fieldValue ?? ''}
                    onChange={(e) => handleChange(e.target.value, textAreaField.formFieldName)}
                    inputRef={field.ref}
                    multiline
                    minRows={5}
                    maxRows={5}
                    label={textAreaField.label + optionalLabel}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message ?? undefined}
                />
            )}
        />
    );
}
