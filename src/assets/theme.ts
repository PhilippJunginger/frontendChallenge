import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#5E81AC',
            light: '#88AEDC',
            dark: '#4C627A',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#A3BE8C',
            light: '#D8E9A8',
            dark: '#789062',
            contrastText: '#FFFFFF',
        },
        error: {
            main: '#BF616A',
            light: '#E8878E',
            dark: '#8C4346',
            contrastText: '#FFFFFF',
        },
        background: {
            default: '#FCFBF4',
            paper: '#FFFFFF',
        },
        text: {
            primary: '#434343',
            secondary: '#676767',
        },
    },
    typography: {
        // Define typography here if needed
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: '4rem',
        },
    },
    components: {
        // Override styles for some components if necessary
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    textTransform: 'none', // Removes uppercase styling from buttons
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    backgroundColor: '#FFFFFF',
                },
            },
        },
    },
});

export default theme;
