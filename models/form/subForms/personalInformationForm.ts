import { z } from 'zod';

export type PersonalInformationForm = {
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
