import { Template } from '../../../models/formTemplates/types/template.ts';
import { useAtomValue } from 'jotai/index';
import { FormProvider, useForm } from 'react-hook-form';
import { tenantApplicationSchema } from '../../../models/form/tenantApplicationForm.ts';
import { useEffect, useState } from 'react';
import { tenantApplicationFormAtom } from '../../assets/atoms/formAtoms.ts';
import FormNavigationButtons from './formNavigationButtons.tsx';
import { formsVisitedAtom } from '../../assets/atoms/progressAtoms.ts';
import FormTemplate from './formTemplate.tsx';
import { useNavigate } from 'react-router-dom';

interface FormContainerProps {
    template: Template;
}

export default function FormTemplateContainer(props: FormContainerProps) {
    const { template } = props;
    const navigate = useNavigate();

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
            navigate(`/forms/${firstError.path[0]}`);
            setValidateForm(true);
        }
    };

    return (
        <>
            <FormProvider {...methods}>
                <form noValidate style={{ width: '100%' }}>
                    <FormTemplate template={template} />
                </form>
            </FormProvider>

            <FormNavigationButtons template={template} onSubmit={onSubmit} />
        </>
    );
}
