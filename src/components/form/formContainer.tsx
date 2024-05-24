import FormTemplate from './formTemplate.tsx';
import { Box } from '@mui/material';
import { FORM_TYPE } from '../../../models/formTemplates/types/template.ts';
import { useAtomValue, useSetAtom } from 'jotai/index';
import { FormProvider, useForm } from 'react-hook-form';
import { tenantApplicationSchema } from '../../../models/form/tenantApplicationForm.ts';
import { useEffect, useState } from 'react';
import Progress from '../progress.tsx';
import {
    currentFormTemplateAtom,
    setCurrentFormTypeAtom,
    tenantApplicationFormAtom,
} from '../../assets/atoms/formAtoms.ts';
import FormNavigationButtons from './formNavigationButtons.tsx';
import { formsVisitedAtom } from '../../assets/atoms/progressAtoms.ts';

export default function FormContainer() {
    const template = useAtomValue(currentFormTemplateAtom);
    const setCurrentFormType = useSetAtom(setCurrentFormTypeAtom);
    const tenantApplication = useAtomValue(tenantApplicationFormAtom);
    const formsVisited = useAtomValue(formsVisitedAtom);

    const methods = useForm();
    const { trigger } = methods;

    const [validateForm, setValidateForm] = useState(false);

    useEffect(() => {
        if (validateForm) {
            void trigger();
            setValidateForm(false);
        }
    }, [trigger, validateForm]);

    useEffect(() => {
        if (template && formsVisited.includes(template.type)) {
            void trigger();
        }
    }, [template?.type]);

    const onSubmit = async () => {
        const result = tenantApplicationSchema.safeParse(tenantApplication);
        if (result.error?.errors) {
            const firstError = result.error.errors[0];
            setCurrentFormType(firstError.path[0] as FORM_TYPE);
            setValidateForm(true);
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', pl: 5, pr: 4, mt: 5 }}>
            <Progress />

            {template && (
                <>
                    <FormProvider {...methods}>
                        <form noValidate style={{ width: '100%' }}>
                            <FormTemplate template={template} />
                        </form>
                    </FormProvider>

                    <FormNavigationButtons
                        template={template}
                        onSubmit={onSubmit}
                        setCurrentFormType={setCurrentFormType}
                    />
                </>
            )}
        </Box>
    );
}
