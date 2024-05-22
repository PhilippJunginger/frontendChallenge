import { Box, Typography } from '@mui/material';
import theme from '../assets/theme.ts';

export default function Header() {
    return (
        <Box
            sx={{ p: 2, position: 'fixed', backgroundColor: theme.palette.background.default, zIndex: 2000, width: 1 }}>
            <Typography typography={'h1'}>Buena</Typography>
        </Box>
    );
}
