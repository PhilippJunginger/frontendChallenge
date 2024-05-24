import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import ErrorPage from './errorPage.tsx';
import { ThemeProvider } from '@mui/material';
import theme from './assets/theme.ts';
import { Provider as JotaiProvider } from 'jotai';
import FormTemplateContainer from './components/form/formTemplateContainer.tsx';
import Summary from './components/summary/summary.tsx';
import Welcome from './components/welcome.tsx';
import { availableTemplates } from './assets/atoms/formAtoms.ts';
import FormContainer from './components/form/formContainer.tsx';

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
                element: <FormContainer />,
                children: [
                    ...availableTemplates.map((template) => ({
                        path: `forms/${template.type}`,
                        element: <FormTemplateContainer key={template.type} template={template} />,
                    })),
                    {
                        path: 'forms/summary',
                        element: <Summary />,
                    },
                ],
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <JotaiProvider>
                <RouterProvider router={router} />
            </JotaiProvider>
        </ThemeProvider>
    </React.StrictMode>,
);
