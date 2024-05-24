import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';
import { StringField } from '../../../../models/formTemplates/types/fields.ts';

interface StringFieldProps {
    field: StringField;
    handleChange: (value: string | undefined, formFieldName: string) => void;
    fieldValue: string | undefined;
    optionalLabel: string;
}

const emailRegex = /^[\w-]+([.+][\w-]+)*@([a-z0-9-]+\.)+[a-z0-9]{2,7}$/i;

export default function StringFormField(props: StringFieldProps) {
    const { field: stringField, handleChange, fieldValue, optionalLabel } = props;

    const { control } = useFormContext();
    const controllerName = stringField.formFieldName;

    return (
        <Controller
            control={control}
            name={controllerName}
            rules={{
                required: stringField.mandatory ? 'This field is mandatory' : false,
                pattern:
                    stringField.inputType === 'email'
                        ? {
                              value: emailRegex,
                              message: 'Email is not in correct format',
                          }
                        : undefined,
            }}
            render={({ field, fieldState }) => (
                <TextField
                    fullWidth
                    required={stringField.mandatory}
                    inputRef={field.ref}
                    value={fieldValue ?? ''}
                    onChange={(e) => handleChange(e.target.value, stringField.formFieldName)}
                    label={stringField.label + optionalLabel}
                    type={stringField.inputType ?? 'text'}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message ?? undefined}
                />
            )}
        />
    );
}
