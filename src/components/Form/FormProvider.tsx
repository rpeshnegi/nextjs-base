import { FormProvider as Form } from 'react-hook-form';

interface IFormProviderProp {
  children: any
  methods: any,
  onSubmit?: any,
  className?: string
};

export default function FormProvider({ children, onSubmit, methods, className }: IFormProviderProp) {
  return (
    <Form {...methods} >
      <form className={className || ''} onSubmit={onSubmit} > {children} </form>
    </Form>
  );
}
