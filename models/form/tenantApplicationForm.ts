import { z } from 'zod';
import { PersonalInformationForm, personalInformationValidator } from './subForms/personalInformationForm';
import { FinancialInformationForm, financialInformationValidator } from './subForms/financialInformationForm';
import { LivingSituationForm, livingSituationValidator } from './subForms/livingSituationForm';
import { PreferencesForm, preferencesValidtor } from './subForms/preferencesForm';
import { FORM_TYPE } from '../formTemplates/types/template.ts';

export type TenantApplicationForm = {
    [FORM_TYPE.PERSONAL_INFORMATION]: PersonalInformationForm;
    [FORM_TYPE.FINANCIAL_INFORMATION]: FinancialInformationForm;
    [FORM_TYPE.LIVING_SITUATION]: LivingSituationForm;
    [FORM_TYPE.PREFERENCES]: PreferencesForm;
};

export const tenantApplicationSchema = z.strictObject({
    [FORM_TYPE.PERSONAL_INFORMATION]: personalInformationValidator,
    [FORM_TYPE.FINANCIAL_INFORMATION]: financialInformationValidator,
    [FORM_TYPE.LIVING_SITUATION]: livingSituationValidator,
    [FORM_TYPE.PREFERENCES]: preferencesValidtor,
});
