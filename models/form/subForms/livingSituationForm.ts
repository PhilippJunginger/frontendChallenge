import { z } from 'zod';
import { Address, addressValidator } from '../types/address';

export type LivingSituationForm = {
    currentAdress: Address;
    reasonForRelocation?: string;
};

export const livingSituationValidator = z.strictObject({
    currentAddress: addressValidator,
    reasonForRelocation: z.string().optional(),
});
