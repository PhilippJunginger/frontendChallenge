import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
    CheckboxField,
    FIELD_TYPE,
    NumberField,
    RadioField,
    StringField,
    TextAreaField,
} from '../models/formTemplates/types/fields';
import { render, renderHook, screen } from '@testing-library/react';
import FormFieldRenderer from '../src/components/form/templateStructure/formField';
import { Form } from '../models/form/form';
import { FORM_TYPE } from '../models/formTemplates/types/template';
import { FormProvider, useForm } from 'react-hook-form';
import { userEvent } from '@testing-library/user-event';

describe('Testing FormField Component', () => {
    const { result } = renderHook(() => useForm());
    const user = userEvent.setup();

    beforeEach(() => {
        vi.resetAllMocks();
        vi.clearAllMocks();
    });

    const stringFieldMock: StringField = {
        type: FIELD_TYPE.STRING,
        label: 'StringMock',
        weight: 12,
        mandatory: true,
        formFieldName: 'mockFieldName',
    };
    const numberFieldMock: NumberField = {
        type: FIELD_TYPE.NUMBER,
        label: 'NumberMock',
        weight: 12,
        mandatory: true,
        formFieldName: 'mockFieldName',
    };
    const checkboxFieldMock: CheckboxField = {
        type: FIELD_TYPE.CHECKBOX,
        label: 'Checkbox',
        weight: 12,
        mandatory: true,
        selectedValue: 'Checkbox',
        formFieldName: 'mockFieldName',
    };
    const radioFieldMock: RadioField = {
        type: FIELD_TYPE.RADIO,
        label: 'RadioMock',
        weight: 12,
        mandatory: true,
        selectedValue: 'Radio',
        formFieldName: 'mockFieldName',
    };
    const textareaMock: TextAreaField = {
        type: FIELD_TYPE.TEXTAREA,
        label: 'TextareaMock',
        weight: 12,
        mandatory: true,
        formFieldName: 'mockFieldName',
    };
    const formMock: Form = {
        type: FORM_TYPE.PERSONAL_INFORMATION,
        data: {},
    };
    const setFormMock = vi.fn();

    describe('Rendering FieldTypes correctly', () => {
        it.each([stringFieldMock, numberFieldMock, textareaMock])('should render correctly for $type', (field) => {
            render(
                <FormProvider {...result.current}>
                    <FormFieldRenderer field={field} form={formMock} setForm={setFormMock} />
                </FormProvider>,
            );

            expect(screen.getByRole('textbox', { name: field.label })).toBeDefined;
        });

        it('should render correctly for $type', () => {
            render(
                <FormProvider {...result.current}>
                    <FormFieldRenderer field={radioFieldMock} form={formMock} setForm={setFormMock} />
                </FormProvider>,
            );

            expect(screen.getByRole('radio', { name: radioFieldMock.label })).toBeDefined;
        });

        it('should render correctly for $type', () => {
            render(
                <FormProvider {...result.current}>
                    <FormFieldRenderer field={checkboxFieldMock} form={formMock} setForm={setFormMock} />
                </FormProvider>,
            );

            expect(screen.getByRole('checkbox', { name: checkboxFieldMock.label })).toBeDefined;
        });
    });

    describe('StringField data handling', () => {
        it('should call setForm with value', async () => {
            render(
                <FormProvider {...result.current}>
                    <FormFieldRenderer field={stringFieldMock} form={formMock} setForm={setFormMock} />
                </FormProvider>,
            );

            await user.type(screen.getByRole('textbox', { name: stringFieldMock.label }), 'T');
            expect(setFormMock).toHaveBeenCalledWith({
                ...formMock,
                data: {
                    [stringFieldMock.formFieldName]: 'T',
                },
            });
        });

        it('should call setForm with removed value', async () => {
            render(
                <FormProvider {...result.current}>
                    <FormFieldRenderer
                        field={stringFieldMock}
                        form={{ ...formMock, data: { [stringFieldMock.formFieldName]: 'T' } }}
                        setForm={setFormMock}
                    />
                </FormProvider>,
            );

            await user.type(screen.getByRole('textbox', { name: stringFieldMock.label }), '{Backspace}');
            expect(setFormMock).toHaveBeenCalledWith({
                ...formMock,
                data: {
                    [stringFieldMock.formFieldName]: undefined,
                },
            });
        });
    });

    describe('NumberField data handling', () => {
        it('should call setForm with value', async () => {
            render(
                <FormProvider {...result.current}>
                    <FormFieldRenderer field={numberFieldMock} form={formMock} setForm={setFormMock} />
                </FormProvider>,
            );

            await user.type(screen.getByRole('textbox', { name: numberFieldMock.label }), '1');
            expect(setFormMock).toHaveBeenCalledWith({
                ...formMock,
                data: {
                    [numberFieldMock.formFieldName]: 1,
                },
            });
        });

        it('should call setForm with removed value', async () => {
            render(
                <FormProvider {...result.current}>
                    <FormFieldRenderer
                        field={numberFieldMock}
                        form={{ ...formMock, data: { [numberFieldMock.formFieldName]: 1 } }}
                        setForm={setFormMock}
                    />
                </FormProvider>,
            );

            await user.type(screen.getByRole('textbox', { name: numberFieldMock.label }), '{Backspace}');
            expect(setFormMock).toHaveBeenCalledWith({
                ...formMock,
                data: {
                    [numberFieldMock.formFieldName]: undefined,
                },
            });
        });
    });

    describe('Checkbox data handling', () => {
        it('should call setFormMock with value', async () => {
            render(
                <FormProvider {...result.current}>
                    <FormFieldRenderer field={checkboxFieldMock} form={formMock} setForm={setFormMock} />
                </FormProvider>,
            );

            await user.click(screen.getByRole('checkbox', { name: checkboxFieldMock.label }));
            expect(setFormMock).toHaveBeenCalledWith({
                ...formMock,
                data: {
                    [checkboxFieldMock.formFieldName]: [checkboxFieldMock.selectedValue],
                },
            });
        });

        it('should call setFormMock with removed value', async () => {
            render(
                <FormProvider {...result.current}>
                    <FormFieldRenderer
                        field={checkboxFieldMock}
                        form={{
                            ...formMock,
                            data: { [checkboxFieldMock.formFieldName]: [checkboxFieldMock.selectedValue] },
                        }}
                        setForm={setFormMock}
                    />
                </FormProvider>,
            );

            await user.click(screen.getByRole('checkbox', { name: checkboxFieldMock.label }));
            expect(setFormMock).toHaveBeenCalledWith({
                ...formMock,
                data: {
                    [checkboxFieldMock.formFieldName]: [],
                },
            });
        });
    });

    describe('Radio data handling', () => {
        it('should call setFormMock with value', async () => {
            render(
                <FormProvider {...result.current}>
                    <FormFieldRenderer field={radioFieldMock} form={formMock} setForm={setFormMock} />
                </FormProvider>,
            );

            await user.click(screen.getByRole('radio', { name: radioFieldMock.label }));
            expect(setFormMock).toHaveBeenCalledWith({
                ...formMock,
                data: {
                    [radioFieldMock.formFieldName]: radioFieldMock.selectedValue,
                },
            });
        });
    });

    describe('TextArea data handling', () => {
        it('should call setForm with value', async () => {
            render(
                <FormProvider {...result.current}>
                    <FormFieldRenderer field={textareaMock} form={formMock} setForm={setFormMock} />
                </FormProvider>,
            );

            await user.type(screen.getByRole('textbox', { name: textareaMock.label }), 'T');
            expect(setFormMock).toHaveBeenCalledWith({
                ...formMock,
                data: {
                    [textareaMock.formFieldName]: 'T',
                },
            });
        });

        it('should call setForm with removed value', async () => {
            render(
                <FormProvider {...result.current}>
                    <FormFieldRenderer
                        field={textareaMock}
                        form={{ ...formMock, data: { [textareaMock.formFieldName]: 'T' } }}
                        setForm={setFormMock}
                    />
                </FormProvider>,
            );

            await user.type(screen.getByRole('textbox', { name: textareaMock.label }), '{Backspace}');
            expect(setFormMock).toHaveBeenCalledWith({
                ...formMock,
                data: {
                    [textareaMock.formFieldName]: undefined,
                },
            });
        });
    });
});
