import { FormEventHandler, ReactNode } from 'react';

type Props = {
  title: string;
  onSubmit: FormEventHandler<HTMLFormElement>;
  children: ReactNode;
  hasUplod?: string
};

 const FormContainer = ({ children, title, onSubmit,hasUplod }: Props) => {
  return (
    <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 w-full">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      <form onSubmit={onSubmit}>{children}</form>
    </div>
  );
};

export default FormContainer;