import { get, RegisterOptions, useFormContext } from 'react-hook-form';
import { FiAlertCircle, FiCheck } from 'react-icons/fi';

import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';

type SelectInputProps = {
  id: string;
  label: string;
  placeholder: string;
  options: { value: string; label: string }[];
  showValid?: boolean;
  helperText?: string;
  validation: RegisterOptions;
} & React.ComponentPropsWithRef<'select'>;

export default function SelectInput({
  id,
  label,
  placeholder,
  options,
  helperText,
  validation,
  showValid = false,
}: SelectInputProps) {
  const {
    register,
    formState: { errors, isValid },
  } = useFormContext();

  const error = get(errors, id);
  return (
    <div className='mt-1'>
      <label htmlFor={id} className='block mb-1'>
        {label}
      </label>
      <select
        id={id}
        {...register(id, validation)}
        className={clsxm(
          'border rounded-md pl-2 pr-8 py-2 focus:border-primary-400 focus:outline-none',
          'inline-flex',
          error && 'border-red-500',
          showValid && isValid && 'border-green-500'
        )}
      >
        <option value=''>{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <div className='absolute -bottom-6 left-0 pr-3 flex items-center pointer-events-none'>
          <FiAlertCircle className='h-5 w-5 text-red-500' aria-hidden='true' />
        </div>
      )}
      {showValid && isValid && (
        <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
          <FiCheck className='h-5 w-5 text-green-500' aria-hidden='true' />
        </div>
      )}
      {helperText && (
        <Typography variant='l3' className='pl-1 text-gray-500 '>
          {helperText}
        </Typography>
      )}
      {error && (
        <Typography
          color='danger'
          variant='l2'
          className='pl-6 pt-1 font-semibold'
        >
          {error.message}
        </Typography>
      )}
    </div>
  );
}
