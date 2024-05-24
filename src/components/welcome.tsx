import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { FORM_TYPE } from '../../models/formTemplates/types/template.ts';

export default function Welcome() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: 1,
                mt: 20,
                alignItems: 'center',
            }}>
            <Typography typography={'h4'}>Hey there!</Typography>
            <Typography>Thank you for taking interest in a possible tenancy at Buena.</Typography>
            <Typography>To get you started, please fill out our application form.</Typography>

            <Button
                variant={'contained'}
                component={Link}
                to={`/forms/${FORM_TYPE.PERSONAL_INFORMATION}`}
                sx={{ mx: 'auto', mt: 6 }}>
                Start application!
            </Button>
        </Box>
    );
}
