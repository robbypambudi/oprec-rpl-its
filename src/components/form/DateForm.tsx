import 'react-datepicker/dist/react-datepicker.css';

import clsx from 'clsx';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import {
  Controller,
  get,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';

import Typography from '@/components/Typography';
type DateFormProps = {
  id: string;
  label: string;
  helperText: string;
  validation: RegisterOptions;
  placeholder: string;
} & Omit<ReactDatePickerProps, 'onChange'>;

export default function DateForm({
  id,
  label,
  helperText,
  validation,
  ...rest
}: DateFormProps) {
  const {
    formState: { errors, isValid },
    control,
  } = useFormContext();
  const error = get(errors, id);

  return (
    <div className='mt-1'>
      <Typography as='label' className='block mb-1'>
        {label}
      </Typography>
      <Controller
        control={control}
        rules={validation}
        name={id}
        render={({ field }) => (
          <ReactDatePicker
            name='id'
            className={clsx(
              'border rounded-md px-2 py-2 focus:border-primary-400 focus:outline-none',
              isValid && 'border-green-500',
              error && 'border-red-500'
            )}
            selected={field.value ? new Date(field.value) : null}
            onChange={field.onChange}
            onBlur={field.onBlur}
            openToDate={field.value ? new Date(field.value) : new Date()}
            dropdownMode='select'
            dateFormat='dd/MM/yyyy'
            {...rest}
          />
        )}
      />
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
