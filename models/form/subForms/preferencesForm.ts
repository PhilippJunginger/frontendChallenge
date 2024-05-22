import { z } from 'zod';
import { FORM_TYPE } from '../../formTemplates/types/template';

export enum PERKS {
    ELEVATOR = 'Elevator',
    BALCONY = 'Balcony',
    GARDEN = 'Garden',
    OLD_BUILDING = 'Old Building (Altbau)',
    PET_FRIENDLY = 'Pet friendly',
}

export type PreferencesForm = {
    formType: FORM_TYPE.PREFERENCES;
    minRent?: number;
    maxRent?: number;
    perks: PERKS[];
};

export const preferencesValidtor = z.strictObject({
    minRent: z.number().optional(),
    maxRent: z.number().optional(),
    perks: z.nativeEnum(PERKS).array(),
});
