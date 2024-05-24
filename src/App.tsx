import './App.css';
import { Box } from '@mui/material';
import theme from './assets/theme.ts';
import Header from './components/header.tsx';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <Box
            sx={{
                backgroundColor: theme.palette.background.default,
                height: 1,
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
            }}>
            <Header />

            <Outlet />
        </Box>
    );
}

export default App;
