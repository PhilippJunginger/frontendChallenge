import { z } from 'zod';
import { Address, addressValidator } from '../types/address';
import { FORM_TYPE } from '../../formTemplates/types/template';

export type LivingSituationForm = {
    formType: FORM_TYPE.LIVING_SITUATION;
    currentAdress: Address;
    reasonForRelocation?: string;
};

export const livingSituationValidator = z.strictObject({
    currentAddress: addressValidator,
    reasonForRelocation: z.string().optional(),
});
