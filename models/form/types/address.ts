import { z } from 'zod';

export type Address = {
    street: string | undefined;
    houseNumber: string | undefined;
    country: string | undefined;
    postCode: string | undefined;
};

export const addressValidator = z.strictObject({
    street: z.string(),
    houseNumber: z.string(),
    country: z.string(),
    postCode: z.string(),
});
