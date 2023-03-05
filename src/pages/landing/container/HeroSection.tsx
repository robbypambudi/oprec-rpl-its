import { useQuery } from '@tanstack/react-query';
import { FiSearch } from 'react-icons/fi';

import Form from '@/components/form/Form';
import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';
import logger from '@/lib/logger';
import { ApiReturn } from '@/types/axios';
import { Roles } from '@/types/role';

type JobFormValues = {
  keywords: string;
  roles: string;
};

export default function HeroSection() {
  const onSubmit = (data: JobFormValues) => {
    logger('Form Values', data);
  };

  const { data: queryData } = useQuery<ApiReturn<Roles>>(['/role']);

  return (
    <div className='layout flex flex-col justify-center h-full'>
      <div className='md:max-w-xl max-w-md'>
        <Typography as='h1' variant='h1'>
          Easy to <span className='text-primary-500'>Hire</span>
        </Typography>
        <Typography as='h1' variant='h1'>
          Talented <span className='text-primary-500'>Developers</span> &
        </Typography>
        <Typography as='h1' variant='h1'>
          Professional Agencies!
        </Typography>
        <div className='mt-4'>
          <Typography as='p' variant='p'>
            We are a community of developers and agencies that are passionate
            about building great products.
          </Typography>
        </div>
        <Form<JobFormValues> onSubmit={onSubmit}>
          {({ formState: { isDirty, errors }, register }) => {
            return (
              <div className='shadow-md rounded-md flex items-center relative justify-between mt-4'>
                <FiSearch className='h-5 w-5 text-gray-500 ml-2 absolute' />
                <input
                  {...register('keywords')}
                  placeholder='Search'
                  className='py-3 pl-10 outline-none'
                />
                <select
                  {...register('roles')}
                  className={clsxm(
                    'outline-none focus:outline-none active:outline-none py-3',
                    'border-l-2 border-r-0 border-y-0 border-secondary-100'
                  )}
                >
                  {queryData ? (
                    <>
                      {queryData.data.map((role, index) => (
                        <option key={index} value={role.value}>
                          {role.label}
                        </option>
                      ))}
                    </>
                  ) : (
                    <option value=''>Loading...</option>
                  )}
                </select>
                <button
                  type='submit'
                  disabled={!isDirty}
                  className={clsxm(
                    'bg-primary-500 text-white px-4 py-3 rounded-r-md',
                    !isDirty && 'hover:bg-primary-600 cursor-not-allowed'
                  )}
                >
                  Search
                </button>
                <div className='absolute -bottom-4'>
                  {errors.keywords && (
                    <Typography as='p' variant='p'>
                      {errors.keywords.message}
                    </Typography>
                  )}
                </div>
              </div>
            );
          }}
        </Form>
      </div>
      <NextImage
        src='/landing/person-1.png'
        width={654}
        height={665}
        alt=''
        className='absolute bottom-0 right-0 w-1/2 md:block hidden'
      />
    </div>
  );
}
