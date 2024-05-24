import { z } from 'zod';

export type PersonalInformationForm = {
    firstName: string | undefined;
    lastName: string | undefined;
    eMail: string | undefined;
    phone: string | undefined;
};

export const personalInformationValidator = z.strictObject({
    firstName: z.string(),
    lastName: z.string(),
    eMail: z.string().email(),
    phone: z.string(),
});
