import './App.css';
import { Box, Button } from '@mui/material';
import theme from './assets/theme.ts';
import Header from './components/header.tsx';
import FormTemplate from './components/form/formTemplate.tsx';
import { atom, useAtomValue, useSetAtom } from 'jotai';
import { PersonalInformationTemplate } from '../models/formTemplates/personalInformationTemplate.ts';
import { LivingSituationTemplate } from '../models/formTemplates/livingSituationTemplate.ts';
import { PreferencesTemplate } from '../models/formTemplates/preferencesTemplate.ts';
import { FinancialInformationTemplate } from '../models/formTemplates/financialInformationTemplate.ts';
import { FORM_TYPE } from '../models/formTemplates/types/template.ts';

const availableTemplates = [
    PersonalInformationTemplate,
    LivingSituationTemplate,
    PreferencesTemplate,
    FinancialInformationTemplate,
];
const currentFormTypeAtom = atom<FORM_TYPE>(FORM_TYPE.PERSONAL_INFORMATION);

const currentFormTemplateAtom = atom((get) => {
    const currentFormType = get(currentFormTypeAtom);
    return availableTemplates.find((availableTemplate) => availableTemplate.type === currentFormType);
});

const setCurrentFormTypeAtom = atom(null, (_get, set, newType: FORM_TYPE) => {
    set(currentFormTypeAtom, newType);
});

function App() {
    const template = useAtomValue(currentFormTemplateAtom);
    const setCurrentFormType = useSetAtom(setCurrentFormTypeAtom);

    const handleFormNavigationClick = (type: FORM_TYPE) => {
        setCurrentFormType(type);
    };

    return (
        <Box sx={{ backgroundColor: theme.palette.background.default, height: 1, display: 'flex' }}>
            <Header />
            <Box sx={{ m: 'auto', display: 'flex', flexDirection: 'column', pl: 5, pr: 4 }}>
                <FormTemplate template={template} />

                <Box sx={{ display: 'flex', mt: 4, mx: 'auto', columnGap: 4 }}>
                    {template?.previousForm && (
                        <Button
                            variant={'outlined'}
                            size={'large'}
                            onClick={() => handleFormNavigationClick(template.previousForm as FORM_TYPE)}>
                            Previous Form
                        </Button>
                    )}

                    {template?.nextForm && (
                        <Button
                            variant={'contained'}
                            size={'large'}
                            onClick={() => handleFormNavigationClick(template.nextForm as FORM_TYPE)}>
                            Next Form
                        </Button>
                    )}
                </Box>
            </Box>
        </Box>
    );
}

export default App;
