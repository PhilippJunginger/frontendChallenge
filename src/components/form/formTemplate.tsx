import FormRow from './formRow.tsx';
import { Grid, Typography } from '@mui/material';
import { Template } from '../../../models/formTemplates/types/template.ts';
import { useAtom, useAtomValue } from 'jotai/index';
import { formFamily } from '../../../models/form/form.ts';
import { progressItemsAtom } from '../../assets/atoms/progressAtoms.ts';

interface FormTemplateProps {
    template: Template;
}

export default function FormTemplate(props: FormTemplateProps) {
    const { template } = props;

    const [form, setForm] = useAtom(formFamily({ type: template.type, data: {} }));
    const hasNoProgressItems = useAtomValue(progressItemsAtom).length === 0;

    return (
        <Grid
            container
            rowSpacing={2}
            width={1}
            sx={{ width: { md: 0.75 }, mx: 'auto', mt: hasNoProgressItems ? 10 : undefined }}>
            <Grid item>
                <Typography typography={'h5'}>{template?.name}</Typography>
            </Grid>
            {template?.rows.map((row, index) => (
                <FormRow key={row.type + index} row={row} form={form} setForm={setForm} />
            ))}
        </Grid>
    );
}
