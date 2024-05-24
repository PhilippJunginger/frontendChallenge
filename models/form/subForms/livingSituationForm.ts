import { z } from 'zod';
import { Address, addressValidator } from '../types/address';

export interface LivingSituationForm {
    currentAdress: Address;
    reasonForRelocation?: string;
}

export const livingSituationValidator = z.strictObject({
    currentAddress: addressValidator,
    reasonForRelocation: z.string().optional(),
});
