import { z } from 'zod';

export enum PERKS {
    ELEVATOR = 'Elevator',
    BALCONY = 'Balcony',
    GARDEN = 'Garden',
    OLD_BUILDING = 'Old Building (Altbau)',
    PET_FRIENDLY = 'Pet friendly',
}

export type PreferencesForm = {
    minRent?: number;
    maxRent: number | undefined;
    perks: PERKS[];
};

export const preferencesValidtor = z.strictObject({
    minRent: z.number().optional(),
    maxRent: z.number(),
    perks: z.nativeEnum(PERKS).array(),
});
