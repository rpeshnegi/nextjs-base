import { useFormContext, Controller } from 'react-hook-form';
import ValidationErrorMessage from '../validations/ValidationErrorMessage';

interface ISelectFormFieldProp {
    [key: string]: any
    name: string,
    options: TSelectOption[]
    showEmpty?: boolean
};

export default function SelectFormField({ name, options, showEmpty }: ISelectFormFieldProp) {
    const { control } = useFormContext();
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <>
                    <select {...field} className="form-control">
                        {showEmpty && <option value={""}>-select-</option>}
                        {options.map((option, index) => (
                            <option key={`${name}-${option.value}-${index}`} value={option.value}>{option.lable}</option>
                        ))}
                    </select>
                    {error?.message && <ValidationErrorMessage className={"mt-1"} error={error.message} />}
                </>
            )}
        />
    );
}
