import { Box } from '@mui/material';
import Progress from '../progress.tsx';
import { Outlet } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';

export default function FormContainer() {
    const methods = useForm();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', pl: 5, pr: 4, pb: 5, mt: { xs: 2, sm: 1, md: 0 } }}>
            <Progress />

            <FormProvider {...methods}>
                <Outlet />
            </FormProvider>
        </Box>
    );
}
