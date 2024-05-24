import { atom } from 'jotai/index';
import { FORM_TYPE } from '../../../models/formTemplates/types/template.ts';
import { tenantApplicationFormAtom } from './formAtoms.ts';
import { personalInformationValidator } from '../../../models/form/subForms/personalInformationForm.ts';
import { livingSituationValidator } from '../../../models/form/subForms/livingSituationForm.ts';
import { financialInformationValidator } from '../../../models/form/subForms/financialInformationForm.ts';
import { preferencesValidtor } from '../../../models/form/subForms/preferencesForm.ts';

const ValidatorMapObject = {
    [FORM_TYPE.PERSONAL_INFORMATION]: personalInformationValidator,
    [FORM_TYPE.LIVING_SITUATION]: livingSituationValidator,
    [FORM_TYPE.FINANCIAL_INFORMATION]: financialInformationValidator,
    [FORM_TYPE.PREFERENCES]: preferencesValidtor,
};

export const formsVisitedAtom = atom<FORM_TYPE[]>([]);

type ProgressItem = { type: FORM_TYPE; isFilledOut: boolean };
export const progressItemsAtom = atom<ProgressItem[]>((get) => {
    const tenantApplication = get(tenantApplicationFormAtom);
    const formsVisited = get(formsVisitedAtom);

    return formsVisited.map((formType) => {
        const formTypeData = tenantApplication[formType];
        const validationResult = ValidatorMapObject[formType].safeParse(formTypeData);

        console.log(
            {
                type: formType,
                isFilledOut: validationResult.success,
            },
            validationResult.error?.errors,
        );
        return {
            type: formType,
            isFilledOut: validationResult.success,
        };
    });
});
