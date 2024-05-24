import { atom } from 'jotai/index';
import { FORM_TYPE } from '../../../models/formTemplates/types/template.ts';
import { TenantApplicationForm } from '../../../models/form/tenantApplicationForm.ts';
import { formFamily } from '../../../models/form/form.ts';
import { PersonalInformationTemplate } from '../../../models/formTemplates/personalInformationTemplate.ts';
import { LivingSituationTemplate } from '../../../models/formTemplates/livingSituationTemplate.ts';
import { PreferencesTemplate } from '../../../models/formTemplates/preferencesTemplate.ts';
import { FinancialInformationTemplate } from '../../../models/formTemplates/financialInformationTemplate.ts';

export const availableTemplates = [
    PersonalInformationTemplate,
    FinancialInformationTemplate,
    LivingSituationTemplate,
    PreferencesTemplate,
];

export const currentFormTypeAtom = atom<FORM_TYPE>(FORM_TYPE.PERSONAL_INFORMATION);

export const currentFormTemplateAtom = atom((get) => {
    const currentFormType = get(currentFormTypeAtom);
    return availableTemplates.find((availableTemplate) => availableTemplate.type === currentFormType);
});

export const setCurrentFormTypeAtom = atom(null, (_get, set, newType: FORM_TYPE) => {
    set(currentFormTypeAtom, newType);
});

export const tenantApplicationFormAtom = atom<TenantApplicationForm>((get) => {
    return {
        [FORM_TYPE.PERSONAL_INFORMATION]: get(formFamily({ type: FORM_TYPE.PERSONAL_INFORMATION, data: {} })).data,
        [FORM_TYPE.FINANCIAL_INFORMATION]: get(formFamily({ type: FORM_TYPE.FINANCIAL_INFORMATION, data: {} })).data,
        [FORM_TYPE.LIVING_SITUATION]: get(formFamily({ type: FORM_TYPE.LIVING_SITUATION, data: {} })).data,
        [FORM_TYPE.PREFERENCES]: get(formFamily({ type: FORM_TYPE.PREFERENCES, data: {} })).data,
    } as TenantApplicationForm;
});
