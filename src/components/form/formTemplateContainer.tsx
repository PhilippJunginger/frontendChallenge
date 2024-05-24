import { Template } from '../../../models/formTemplates/types/template.ts';
import { useAtomValue } from 'jotai/index';
import { useFormContext } from 'react-hook-form';
import { tenantApplicationSchema } from '../../../models/form/tenantApplicationForm.ts';
import { useEffect } from 'react';
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

    const methods = useFormContext();
    const { trigger } = methods;

    useEffect(() => {
        if (formsVisited.includes(template.type)) {
            void trigger();
        }
    }, [formsVisited.length]);

    const onSubmit = async () => {
        void trigger();
        const result = tenantApplicationSchema.safeParse(tenantApplication);

        if (result.success) {
            navigate('/forms/summary');
            return;
        }

        const firstError = result.error.errors[0];
        navigate(`/forms/${firstError.path[0]}`);
    };

    return (
        <>
            <form noValidate style={{ width: '100%' }}>
                <FormTemplate template={template} />
            </form>

            <FormNavigationButtons template={template} onSubmit={onSubmit} />
        </>
    );
}
