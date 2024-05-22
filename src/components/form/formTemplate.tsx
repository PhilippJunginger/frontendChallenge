import FormRow from './formRow.tsx';
import { Grid, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { Template } from '../../../models/formTemplates/types/template.ts';

interface FormTemplateProps {
    template: Template | undefined;
}

export default function FormTemplate(props: FormTemplateProps) {
    const { template } = props;
    const methods = useForm();

    return (
        <FormProvider {...methods}>
            <form style={{ width: '75%', margin: 'auto' }}>
                <Grid container spacing={2} width={1}>
                    <Grid item>
                        <Typography typography={'h5'}>{template?.name}</Typography>
                    </Grid>
                    {template?.rows.map((row) => <FormRow row={row} />)}
                </Grid>
            </form>
        </FormProvider>
    );
}
