import { FIELD_TYPE, FormField } from '../../../models/formTemplates/types/fields.ts';
import CheckboxFormField from './formInputs/checkboxFormField.tsx';
import NumberFormField from './formInputs/numberFormField.tsx';
import RadioFormField from './formInputs/radioFormField.tsx';
import StringFormField from './formInputs/stringFormField.tsx';
import TextAreaFormField from './formInputs/textareaFormField.tsx';
import { Form, SetAtom } from '../../../models/form/form.ts';
import { get, set } from 'lodash';
import { SetStateAction } from 'react';
import { useFormContext } from 'react-hook-form';

interface FormFieldProps {
    field: FormField;
    form: Form;
    setForm: SetAtom<[SetStateAction<Form>], void>;
}

export default function FormFieldRenderer(props: FormFieldProps) {
    const { field, setForm, form } = props;
    const { formFieldName, type, mandatory } = field;

    const { setValue, clearErrors } = useFormContext();
    const fieldValue = get(form.data, formFieldName);
    const optionalLabel = !mandatory ? ' (optional)' : '';

    const handleChange = (value: string | number | undefined) => {
        const updatedData = structuredClone(form);
        const dataReference = get(updatedData.data, formFieldName);

        if (type === FIELD_TYPE.CHECKBOX && typeof value === 'string') {
            const checkboxValue = handleCheckboxInput(dataReference, value);
            set(updatedData.data, formFieldName, checkboxValue);
            setValue(formFieldName, checkboxValue);
        } else {
            set(updatedData.data, formFieldName, typeof value === 'string' && !value.length ? undefined : value);
            setValue(formFieldName, typeof value === 'string' && !value.length ? undefined : value);
        }

        if (value != null) {
            clearErrors(formFieldName);
        }

        setForm(updatedData);
    };

    function handleCheckboxInput(existingData: string[] | undefined, value: string) {
        if (!Array.isArray(existingData)) {
            return [value];
        }

        if (existingData?.includes(value)) {
            return existingData.filter((val) => val !== value);
        }

        existingData.push(value);
        return [...existingData];
    }

    function handleRenderField() {
        switch (type) {
            case FIELD_TYPE.CHECKBOX:
                return <CheckboxFormField field={field} handleChange={handleChange} fieldValue={fieldValue} />;
            case FIELD_TYPE.NUMBER:
                return (
                    <NumberFormField
                        field={field}
                        handleChange={handleChange}
                        fieldValue={fieldValue}
                        optionalLabel={optionalLabel}
                    />
                );
            case FIELD_TYPE.RADIO:
                return <RadioFormField field={field} handleChange={handleChange} fieldValue={fieldValue} />;
            case FIELD_TYPE.STRING:
                return (
                    <StringFormField
                        field={field}
                        handleChange={handleChange}
                        fieldValue={fieldValue}
                        optionalLabel={optionalLabel}
                    />
                );
            case FIELD_TYPE.TEXTAREA:
                return (
                    <TextAreaFormField
                        field={field}
                        handleChange={handleChange}
                        fieldValue={fieldValue}
                        optionalLabel={optionalLabel}
                    />
                );
        }
    }

    return handleRenderField();
}
