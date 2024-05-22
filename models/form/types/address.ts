import { z } from 'zod';

export type Address = {
    street: string;
    houseNumber: string;
    country: string;
    postCode: string;
};

export const addressValidator = z.strictObject({
    street: z.string(),
    houseNumber: z.string(),
    country: z.string(),
    postCode: z.string(),
});
