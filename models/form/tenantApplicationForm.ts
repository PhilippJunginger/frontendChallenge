import { z } from 'zod';
import { PersonalInformationForm, personalInformationValidator } from './subForms/personalInformationForm';
import { FinancialInformationForm, financialInformationValidator } from './subForms/financialInformationForm';
import { LivingSituationForm, livingSituationValidator } from './subForms/livingSituationForm';
import { PreferencesForm, preferencesValidtor } from './subForms/preferencesForm';

export type TenantApplicationForm = {
    personalInformation: PersonalInformationForm;
    financialInformation: FinancialInformationForm;
    livingSituation: LivingSituationForm;
    preferences: PreferencesForm;
};

export const tenantApplicationValidator = z.strictObject({
    personalInformation: personalInformationValidator,
    financialInformation: financialInformationValidator,
    livingSituation: livingSituationValidator,
    preferences: preferencesValidtor,
});
