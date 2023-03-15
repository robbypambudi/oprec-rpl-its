import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';

import Button from '@/components/buttons/Button';
import Form from '@/components/form/Form';
import Input from '@/components/form/Input';
import { EMAIL_REGEX } from '@/constant/regex';
import { api } from '@/lib/api';

type LoginForm = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const route = useRouter();

  const onSubmit = (data: LoginForm) => {
    toast.promise(
      api
        .post('/login', data)
        .then((res) => res.status === 200 && route.push('/lengkapi')),
      {
        loading: 'Loading',
        success: 'Success',
        error: 'Error',
      }
    );
  };
  return (
    <Form<LoginForm> onSubmit={onSubmit} mode={'onChange'}>
      {({ formState: { isDirty } }) => (
        <>
          <Input
            id='email'
            label='Email'
            type='email'
            showValid={true}
            placeholder='Masukkan email'
            validate={{
              required: 'Email harus diisi',
              pattern: {
                value: EMAIL_REGEX,
                message: 'Email tidak valid',
              },
            }}
          />
          <Input
            id='password'
            type={'password'}
            label='Password'
            showValid={true}
            placeholder='Masukkan password'
            isPassword={true}
            validate={{
              required: 'Password harus diisi',
              min: {
                value: 6,
                message: 'Password minimal 6 karakter',
              },
            }}
          />

          <Button type='submit' disabled={!isDirty} className='mt-4'>
            Login
          </Button>
        </>
      )}
    </Form>
  );
}
