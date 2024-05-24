import { Box, Typography } from '@mui/material';

export default function Header() {
    return (
        <Box
            sx={{
                p: 2,
                pl: 4,
                display: 'flex',
                flexDirection: {
                    xs: 'column',
                    md: 'row',
                },
            }}>
            <Typography typography={'h1'}>Buena</Typography>
        </Box>
    );
}
