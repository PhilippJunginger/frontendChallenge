import { z } from 'zod';
import { FORM_TYPE } from '../../formTemplates/types/template';

export type PersonalInformationForm = {
    formType: FORM_TYPE.PERSONAL_INFORMATION;
    firstName: string;
    lastName: string;
    eMail: string;
    phone: string;
};

export const personalInformationValidator = z.strictObject({
    firstName: z.string(),
    lastName: z.string(),
    eMail: z.string().email(),
    phone: z.string(),
});
