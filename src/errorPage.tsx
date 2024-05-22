import { ErrorResponse, useRouteError } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

export default function ErrorPage() {
    const error = useRouteError() as ErrorResponse;

    return (
        <Box style={{ height: '100vh', display: 'flex' }}>
            <Box style={{ margin: 'auto' }}>
                <Typography typography={'h1'}>Oops!</Typography>
                <Typography typography={'p'} sx={{ mt: 1 }}>
                    Sorry, an unexpected error has occurred.
                </Typography>
                <Typography>
                    <i>{error.statusText}</i>
                </Typography>
            </Box>
        </Box>
    );
}
