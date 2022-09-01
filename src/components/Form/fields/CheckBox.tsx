import { useFormContext, Controller } from 'react-hook-form';

interface ICheckBox {
  [key: string]: string
  name: string
};

export default function CheckBox({ name, ...other }: ICheckBox) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { } }) => (
        <input type="checkbox" {...field} {...other} />
      )}
    />
  );
}
