import { z } from 'zod';
import { Address, addressValidator } from '../types/address';
import { FORM_TYPE } from '../../formTemplates/types/template';

export enum SALARY {
    ZERO_TO_ONE_K = '0 - 1.000',
    ONE_K_TO_TWO_K = '1.000 - 2.000',
    TWO_K_TO_THREE_K = '2.000 - 3.000',
    THREE_K_TO_FOUR_K = '3.000 - 4.000',
    MORE_THAN_FOUR_K = 'More than 4000',
}

export type FinancialInformationForm = {
    formType: FORM_TYPE.FINANCIAL_INFORMATION;
    occupationTitle?: string;
    companyName?: string;
    address?: Address;
    salary: SALARY;
};

export const financialInformationValidator = z.strictObject({
    occupationTitle: z.string(),
    companyName: z.string().optional(),
    address: addressValidator.optional(),
    salary: z.nativeEnum(SALARY),
});
