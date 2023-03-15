import { useQuery } from '@tanstack/react-query';
import * as React from 'react';
import { BsDot } from 'react-icons/bs';

import Button from '@/components/buttons/Button';
import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';
import { Cards } from '@/constant/landing';
import CardProfile from '@/pages/landing/components/CardProfile';
import { ApiReturn } from '@/types/axios';
import { Language } from '@/types/language';

export default function SkillSection() {
  const { data: queryData } = useQuery<ApiReturn<Language>>(['/language']);
  return (
    <div className='layout flex flex-col min-h-screen py-20'>
      <div className='flex flex-wrap gap-x-0 md:gap-x-12 gap-y-3 md:justify-between justify-center items-center mt-12'>
        {Cards.map((card, index) => (
          <CardProfile
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </div>
      <div className='relative'>
        <div className='flex flex-col mt-32 max-w-2xl'>
          <Typography as='h2' variant='h2' color='white'>
            <span className='text-primary-600'>60+</span> Technologies
            Registered our Platform
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
          <div className='mt-8 flex gap-x-4 flex-wrap gap-y-2'>
            {queryData &&
              queryData.data.map((language, index) => (
                <Button
                  key={index}
                  size='sm'
                  leftIcon={BsDot}
                  leftIconClassName='text-xl'
                >
                  {language.label}
                </Button>
              ))}
          </div>
        </div>
        <NextImage
          src='/landing/person-2.png'
          width={459}
          height={470}
          alt=''
          className='absolute top-1/4 right-20 w-1/4 md:block hidden'
        />
      </div>
    </div>
  );
}
