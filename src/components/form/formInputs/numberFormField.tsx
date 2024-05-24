import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';
import { NumberField } from '../../../../models/formTemplates/types/fields.ts';
import { ChangeEvent } from 'react';

interface NumberFieldProps {
    field: NumberField;
    fieldValue: number | undefined;
    handleChange: (value: number | undefined, formFieldName: string) => void;
    optionalLabel: string;
}

export default function NumberFormField(props: NumberFieldProps) {
    const { field: numberField, fieldValue, optionalLabel, handleChange } = props;

    const { control } = useFormContext();
    const controllerName = numberField.formFieldName;

    const handleNumberInput = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        handleChange(!value.length ? undefined : +value, numberField.formFieldName);
    };

    return (
        <Controller
            control={control}
            name={controllerName}
            rules={{
                required: numberField.mandatory ? 'This field is mandatory' : false,
            }}
            render={({ field, fieldState }) => (
                <TextField
                    fullWidth
                    value={fieldValue ?? ''}
                    onChange={handleNumberInput}
                    inputRef={field.ref}
                    label={numberField.label + optionalLabel}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message ?? undefined}
                />
            )}
        />
    );
}
