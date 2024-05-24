import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Progress from '../src/components/progress';
import { JotaiHydrateProvider } from './utils/jotaiHydrateProvider';
import { formFamily } from '../models/form/form';
import { FORM_TYPE } from '../models/formTemplates/types/template';
import { formsVisitedAtom } from '../src/assets/atoms/progressAtoms';
import { userEvent } from '@testing-library/user-event';
import { useNavigate } from 'react-router-dom';

vi.mock('react-router-dom', () => ({
    ...vi.importActual('react-router-dom'),
    useNavigate: vi.fn(() => ({
        navigate: vi.fn(),
    })),
}));

describe('Testing Progress Component', () => {
    const user = userEvent.setup();

    beforeEach(() => {
        vi.resetAllMocks();
        vi.clearAllMocks();
    });

    it.each([
        FORM_TYPE.PERSONAL_INFORMATION,
        FORM_TYPE.PREFERENCES,
        FORM_TYPE.LIVING_SITUATION,
        FORM_TYPE.FINANCIAL_INFORMATION,
    ])('should render correctly for formType %s', (type) => {
        render(
            <JotaiHydrateProvider
                initialValues={[
                    [formFamily({ type, data: {} }), { type, data: {} }],
                    [formsVisitedAtom, [type]],
                ]}>
                <Progress />
            </JotaiHydrateProvider>,
        );

        expect(screen.getByRole('button', { name: type })).toBeDefined();
    });

    it('should call navigate with correct url on progressItem click', async () => {
        const navigate = vi.fn();
        (useNavigate as Mock).mockReturnValue(navigate);

        render(
            <JotaiHydrateProvider
                initialValues={[
                    [
                        formFamily({ type: FORM_TYPE.PERSONAL_INFORMATION, data: {} }),
                        { type: FORM_TYPE.PERSONAL_INFORMATION, data: {} },
                    ],
                    [formsVisitedAtom, [FORM_TYPE.PERSONAL_INFORMATION]],
                ]}>
                <Progress />
            </JotaiHydrateProvider>,
        );

        await user.click(screen.getByRole('button', { name: FORM_TYPE.PERSONAL_INFORMATION }));
        expect(navigate).toHaveBeenCalledWith(`/forms/${FORM_TYPE.PERSONAL_INFORMATION}`);
    });
});
