import { useFormContext, Controller } from 'react-hook-form';
import ValidationErrorMessage from '../validations/ValidationErrorMessage';

interface ITextField {
  [key: string]: any
  name: string
};

export default function TextField({ name, ...other }: ITextField) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <input {...field} {...other} />
          {error?.message && <ValidationErrorMessage className={"mt-1"} error={error.message} />}
        </>
      )}
    />
  );
}
