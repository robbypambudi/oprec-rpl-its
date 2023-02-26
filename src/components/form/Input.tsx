import * as React from 'react';
import { get, RegisterOptions, useFormContext } from 'react-hook-form';
import { FiAlertCircle, FiCheck, FiEye, FiEyeOff } from 'react-icons/fi';

import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';

type InputProps = {
  id: string;
  label: string;
  placeholder?: string;
  validate?: RegisterOptions;
  showValid?: boolean;
  helperText?: string;
  isPassword?: boolean;
} & React.ComponentPropsWithRef<'input'>;

const Input = ({
  id,
  validate,
  label,
  placeholder,
  showValid = false,
  helperText,
  type = 'text',
  isPassword = false,
  ...rest
}: InputProps) => {
  const {
    register,
    formState: { errors, isValid },
  } = useFormContext();

  // Input kalo tipenya password
  const [showPassword, setShowPassword] = React.useState(false);

  const error = get(errors, id);
  return (
    <div className='mt-1'>
      <Typography as='label' className='block mb-1'>
        {label}
      </Typography>
      <div className='relative'>
        <input
          type={isPassword ? (!showPassword ? 'password' : 'text') : type}
          {...rest}
          {...register(id, validate)}
          className={clsxm(
            'rounded-md',
            error && 'border-red-500 focus:outline-none',
            showValid && isValid && 'border-green-500',
            'px-4 py-2 border block w-full focus:border-primary-400 '
          )}
          placeholder={placeholder}
        />
        {isPassword && (
          <div className='absolute right-3 top-3'>
            {showPassword ? (
              <FiEye
                onClick={() => setShowPassword(!showPassword)}
                size='20'
                className='text-gray-600'
              />
            ) : (
              <FiEyeOff
                onClick={() => setShowPassword(!showPassword)}
                size='20'
                className='text-gray-600'
              />
            )}
          </div>
        )}
        {error && (
          <div className='absolute -bottom-6 left-0 pr-3 flex items-center pointer-events-none'>
            <FiAlertCircle
              className='h-5 w-5 text-red-500'
              aria-hidden='true'
            />
          </div>
        )}
        {showValid && isValid && !isPassword && (
          <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
            <FiCheck className='h-5 w-5 text-green-500' aria-hidden='true' />
          </div>
        )}
      </div>
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
};

export default Input;
