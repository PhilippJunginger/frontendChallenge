import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormNavigationButtons from '../src/components/form/formNavigationButtons';
import { FORM_TYPE, Template } from '../models/formTemplates/types/template';
import { useNavigate } from 'react-router-dom';
import { userEvent } from '@testing-library/user-event';

vi.mock('react-router-dom', () => ({
    ...vi.importActual('react-router-dom'),
    useNavigate: vi.fn(() => ({
        navigate: vi.fn(),
    })),
}));

describe('Testing FormNavigationButtons Component', () => {
    const mockTemplateNextButton: Template = {
        name: 'Tina Template',
        type: FORM_TYPE.FINANCIAL_INFORMATION,
        nextForm: FORM_TYPE.PREFERENCES,
        rows: [],
    };
    const mockTemplateBothButtons: Template = {
        name: 'Tina Template',
        type: FORM_TYPE.FINANCIAL_INFORMATION,
        previousForm: FORM_TYPE.LIVING_SITUATION,
        nextForm: FORM_TYPE.PREFERENCES,
        rows: [],
    };
    const mockTemplatePrevButton: Template = {
        name: 'Tina Template',
        type: FORM_TYPE.FINANCIAL_INFORMATION,
        previousForm: FORM_TYPE.LIVING_SITUATION,
        rows: [],
    };
    const onSubmitMock = vi.fn();
    const user = userEvent.setup();

    beforeEach(() => {
        vi.resetAllMocks();
        vi.clearAllMocks();
    });

    it.each([mockTemplateNextButton, mockTemplateBothButtons, mockTemplatePrevButton])(
        'should render correctly for nextForm: $nextForm and prevForm: $previousForm',
        (template) => {
            render(<FormNavigationButtons template={template} onSubmit={onSubmitMock} />);

            if (template.nextForm) {
                expect(screen.getByRole('button', { name: 'Next Form' })).toBeDefined();
            } else {
                expect(screen.getByRole('button', { name: 'Finish Application' })).toBeDefined();
            }

            if (template.previousForm) {
                expect(screen.getByRole('button', { name: 'Previous Form' })).toBeDefined();
            }
        },
    );

    it('should navigate to form on form-button click', async () => {
        const navigate = vi.fn();
        (useNavigate as Mock).mockReturnValue(navigate);

        render(<FormNavigationButtons template={mockTemplateBothButtons} onSubmit={onSubmitMock} />);

        await user.click(screen.getByRole('button', { name: 'Next Form' }));
        expect(navigate).toHaveBeenCalledWith(`/forms/${mockTemplateBothButtons.nextForm}`);
    });

    it('should call onSubmit on submit-button click', async () => {
        const navigate = vi.fn();
        (useNavigate as Mock).mockReturnValue(navigate);

        render(<FormNavigationButtons template={mockTemplatePrevButton} onSubmit={onSubmitMock} />);

        await user.click(screen.getByRole('button', { name: 'Finish Application' }));
        expect(onSubmitMock).toHaveBeenCalledOnce();
    });
});
