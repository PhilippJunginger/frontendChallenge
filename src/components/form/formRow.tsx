import { FormControl, FormHelperText, Grid, RadioGroup } from '@mui/material';
import { Row } from '../../../models/formTemplates/types/row.ts';
import { Controller } from 'react-hook-form';
import FormFieldRenderer from './formField.tsx';
import { Form, SetAtom } from '../../../models/form/form.ts';
import { SetStateAction } from 'react';
import theme from '../../assets/theme.ts';

interface FormRowProps {
    row: Row;
    form: Form;
    setForm: SetAtom<[SetStateAction<Form>], void>;
    isSummary?: boolean;
}

export default function FormRow(props: FormRowProps) {
    const { row, form, setForm, isSummary } = props;

    const renderRowContent = () => {
        const rowFields = row.fields.map((field, index) => (
            <Grid key={field.type + index} width={1} item xs={12} sm={field.weight}>
                <FormFieldRenderer field={field} form={form} setForm={setForm} isSummary={isSummary} />
            </Grid>
        ));

        if (row.radioId) {
            const isRadioGroupMandatory = row.fields.find((field) => field.formFieldName === row.radioId)?.mandatory;

            return (
                <Controller
                    name={row.radioId}
                    rules={{
                        required: isRadioGroupMandatory ? 'Please select one of the available options' : false,
                    }}
                    render={({ fieldState }) => (
                        <FormControl
                            sx={{
                                ml: 1,
                                p: 1,
                                border: fieldState.error ? 1 : undefined,
                                borderColor: fieldState.error ? theme.palette.error.main : undefined,
                                borderRadius: fieldState.error ? 2.5 : undefined,
                            }}
                            fullWidth
                            error={!!fieldState.error}>
                            <RadioGroup name={row.radioId}>
                                <Grid container>{rowFields}</Grid>
                            </RadioGroup>
                            {!!fieldState.error && <FormHelperText>{fieldState.error.message}</FormHelperText>}
                        </FormControl>
                    )}
                />
            );
        }

        return rowFields;
    };

    return (
        <Grid item width={1} container spacing={1} xs={12}>
            {renderRowContent()}
        </Grid>
    );
}
