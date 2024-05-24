import { FORM_TYPE } from '../formTemplates/types/template';
import { atomFamily } from 'jotai/utils';
import { atom } from 'jotai';
import { FinancialInformationForm } from './subForms/financialInformationForm.ts';
import { LivingSituationForm } from './subForms/livingSituationForm.ts';
import { PersonalInformationForm } from './subForms/personalInformationForm.ts';
import { PreferencesForm } from './subForms/preferencesForm.ts';

export type Form = {
    type: FORM_TYPE;
    data: {
        [key: string]: any;
    };
};

export type SetAtom<Args extends any[], Result> = (...args: Args) => Result;
export const formFamily = atomFamily(
    (form: Form) => {
        switch (form.type) {
            case FORM_TYPE.FINANCIAL_INFORMATION: {
                const financialInit: FinancialInformationForm = {
                    occupationTitle: '',
                    salary: undefined,
                };
                form.data = financialInit;
                break;
            }
            case FORM_TYPE.LIVING_SITUATION: {
                const livingSituationInit: LivingSituationForm = {
                    currentAdress: {
                        street: '',
                        houseNumber: '',
                        postCode: '',
                        country: '',
                    },
                };
                form.data = livingSituationInit;
                break;
            }
            case FORM_TYPE.PERSONAL_INFORMATION: {
                const personalInit: PersonalInformationForm = {
                    firstName: '',
                    lastName: '',
                    eMail: '',
                    phone: '',
                };
                form.data = personalInit;
                break;
            }
            case FORM_TYPE.PREFERENCES: {
                const preferencesInit: PreferencesForm = {
                    perks: [],
                };
                form.data = preferencesInit;
                break;
            }
        }

        return atom(form);
    },
    (a, b) => a.type === b.type,
);
