import { useFormContext, Controller } from 'react-hook-form';

interface IPasswordField {
  [key: string]: string
  name: string
};

export default function PasswordField({ name, ...other }: IPasswordField) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { } }) => (
        <input type="password" {...field} {...other} />
      )}
    />
  );
}
