import * as React from 'react';

import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';

export default function AgencySection() {
  return (
    <div className='layout pt-20 flex justify-center items-center'>
      <div
        className={clsxm(
          'bg-secondary-600 rounded-lg px-12 md:py-16 py-8',
          'grid md:grid-cols-2 grid-cols-1'
        )}
      >
        <div>
          <Typography as='h2' variant='h2' color='primary'>
            100+ Countries
          </Typography>
          <Typography as='h2' variant='h2' color='white'>
            Regustered Over Our Platform
          </Typography>
          <Typography
            as='p'
            variant='p'
            color='gray'
            className='mt-4 text-justify'
          >
            We are a community of developers and agencies that are passionate
            about building great products. We are a community of developers and
            agencies that are passionate about building great products. We are a
            community of developers and agencies that are passionate about
            building great products.
          </Typography>
        </div>
        <div className='md:mt-0 mt-8'>
          <NextImage
            src='/landing/map.png'
            width={690}
            height={447}
            layout='responsive'
            alt=''
            className='w-full'
          />
        </div>
      </div>
    </div>
  );
}
