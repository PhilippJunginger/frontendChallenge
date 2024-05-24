import { Controller, useFormContext, ValidationRule } from 'react-hook-form';
import { TextField } from '@mui/material';
import { StringField } from '../../../../models/formTemplates/types/fields.ts';

interface StringFieldProps {
    field: StringField;
    handleChange: (value: string | undefined, formFieldName: string) => void;
    fieldValue: string | undefined;
    optionalLabel: string;
    isSummary?: boolean;
}

const emailRegex = /^[\w-]+([.+][\w-]+)*@([a-z0-9-]+\.)+[a-z0-9]{2,7}$/i;
export const telRegex = /^[+]?[(]?\d{3}[)]?[-]?\d{3}[-]?\d{2,8}$/;

export default function StringFormField(props: StringFieldProps) {
    const { field: stringField, handleChange, fieldValue, optionalLabel, isSummary } = props;

    const { control } = useFormContext();
    const controllerName = stringField.formFieldName;

    const getValidationPattern = (): ValidationRule<RegExp> | undefined => {
        switch (stringField.inputType) {
            case 'email':
                return {
                    value: emailRegex,
                    message: 'Email is not in correct format',
                };
            case 'tel':
                return {
                    value: telRegex,
                    message: 'Phone number is not in correct format',
                };
            default:
                return undefined;
        }
    };

    return (
        <Controller
            control={control}
            name={controllerName}
            rules={{
                required: stringField.mandatory ? 'This field is mandatory' : false,
                pattern: getValidationPattern(),
            }}
            render={({ field, fieldState }) => (
                <TextField
                    fullWidth
                    disabled={isSummary}
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
