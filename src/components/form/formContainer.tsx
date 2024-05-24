import { Box } from '@mui/material';
import Progress from '../progress.tsx';
import { Outlet } from 'react-router-dom';

export default function FormContainer() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', pl: 5, pr: 4, mt: 5 }}>
            <Progress />

            <Outlet />
        </Box>
    );
}
