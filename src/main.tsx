import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import ErrorPage from './errorPage.tsx';
import { ThemeProvider } from '@mui/material';
import theme from './assets/theme.ts';
import { Provider } from 'jotai';
import FormContainer from './components/form/formContainer.tsx';
import Summary from './components/summary/summary.tsx';
import Welcome from './components/welcome.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Welcome />,
            },
            {
                path: 'forms',
                element: <FormContainer />,
            },
            {
                path: 'summary',
                element: <Summary />,
            },
        ],
    },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Provider>
                <RouterProvider router={router} />
            </Provider>
        </ThemeProvider>
    </React.StrictMode>,
);
