import { Box, Button } from '@mui/material';
import { FORM_TYPE, Template } from '../../../models/formTemplates/types/template.ts';
import theme from '../../assets/theme.ts';
import { SetAtom } from '../../../models/form/form.ts';
import { useSetAtom } from 'jotai/index';
import { formsVisitedAtom } from '../../assets/atoms/progressAtoms.ts';

interface FormNavigationButtonsProps {
    template: Template;
    onSubmit: () => Promise<void>;
    setCurrentFormType: SetAtom<[newType: FORM_TYPE], void>;
}

export default function FormNavigationButtons(props: FormNavigationButtonsProps) {
    const { template, onSubmit, setCurrentFormType } = props;

    const setFormsVisited = useSetAtom(formsVisitedAtom);

    const handleFormNavigationClick = (type: FORM_TYPE) => {
        setCurrentFormType(type);
        setFormsVisited((prev) => {
            if (!prev.includes(template.type)) {
                return [...prev, template.type];
            }

            return [...prev];
        });
    };

    const handleSubmitButtonClick = async () => {
        setFormsVisited((prev) => {
            if (!prev.includes(template.type)) {
                return [...prev, template.type];
            }

            return [...prev];
        });
        await onSubmit();
    };

    return (
        <Box sx={{ display: 'flex', mt: 4, mx: 'auto', columnGap: 4 }}>
            {template?.previousForm && (
                <Button
                    variant={'outlined'}
                    size={'large'}
                    onClick={() => handleFormNavigationClick(template.previousForm as FORM_TYPE)}>
                    Previous Form
                </Button>
            )}

            {template?.nextForm ? (
                <Button
                    variant={'contained'}
                    size={'large'}
                    onClick={() => handleFormNavigationClick(template.nextForm as FORM_TYPE)}>
                    Next Form
                </Button>
            ) : (
                <Button
                    variant={'contained'}
                    sx={{ backgroundColor: theme.palette.success.main }}
                    size={'large'}
                    onClick={handleSubmitButtonClick}>
                    Finish Application
                </Button>
            )}
        </Box>
    );
}
