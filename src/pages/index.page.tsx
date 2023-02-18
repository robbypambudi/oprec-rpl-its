import { IconType } from 'react-icons';
import { BsDot } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';

import Button from '@/components/buttons/Button';
import Form from '@/components/form/Form';
import NextImage from '@/components/NextImage';
import SEO from '@/components/SEO';
import Typography from '@/components/Typography';
import { Agencies, Cards } from '@/constant/landing';
import Layout from '@/layouts/Layout';
import clsxm from '@/lib/clsxm';
import logger from '@/lib/logger';

type JobFormValues = {
  keywords: string;
  roles: string;
};

const roles = [
  { value: 'frontend', label: 'Frontend Developer' },
  { value: 'backend', label: 'Backend Developer' },
  { value: 'fullstack', label: 'Fullstack Developer' },
  { value: 'mobile', label: 'Mobile Developer' },
  { value: 'devops', label: 'DevOps Engineer' },
  { value: 'designer', label: 'UI/UX Designer' },
  { value: 'qa', label: 'Quality Assurance' },
  { value: 'project', label: 'Project Manager' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'sales', label: 'Sales' },
];

const Languages = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'php', label: 'PHP' },
  { value: 'python', label: 'Python' },
] as const;

const Companies = [
  {
    label: 'Asana',
    path: '/landing/asana.png',
  },
  {
    label: 'Adobe',
    path: '/landing/adobe.png',
  },
  {
    label: 'Active Campaign',
    path: '/landing/activecampaign.png',
  },
  {
    label: 'Airtasker',
    path: '/landing/airtasker.png',
  },
  {
    label: 'Ariwallex',
    path: '/landing/airwallex.png',
  },
] as const;

export default function Home() {
  const onSubmit = (data: JobFormValues) => {
    logger('Form Values', data);
  };

  return (
    <Layout>
      <SEO title='' description='This is the home page' />
      <main>
        <section
          className={clsxm(
            'h-screen relative bg-[url(/images/landing/bg-hero.png)]',
            'bg-no-repeat bg-cover bg-bottom'
          )}
        >
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
                  We are a community of developers and agencies that are
                  passionate about building great products.
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
                        {roles.map((role) => (
                          <option key={role.value} value={role.value}>
                            {role.label}
                          </option>
                        ))}
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
              className='absolute bottom-0 right-0 md:block hidden'
            />
          </div>
        </section>
        <section className='bg-secondary-600'>
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
                  We are a community of developers and agencies that are
                  passionate about building great products. We are a community
                  of developers and agencies that are passionate about building
                  great products. We are a community of developers and agencies
                  that are passionate about building great products.
                </Typography>
                <div className='mt-8 flex gap-x-4 flex-wrap gap-y-2'>
                  {Languages.map((language) => (
                    <Button
                      key={language.value}
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
        </section>
        <section className='bg-[#F6FFFC]'>
          <div className='layout min-h-scree py-20'>
            <Typography as='h2' variant='h2' className=''>
              Agencies
            </Typography>
            <div className='flex flex-wrap gap-x-4 gap-y-6 items-center justify-center mt-6'>
              {Agencies.map((agency, index) => (
                <CardAgency key={index} {...agency} className='mt-12' />
              ))}
            </div>
          </div>
        </section>
        <section className='bg-[#F6FFFC]'>
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
                  We are a community of developers and agencies that are
                  passionate about building great products. We are a community
                  of developers and agencies that are passionate about building
                  great products. We are a community of developers and agencies
                  that are passionate about building great products.
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
        </section>
        <section className='bg-[#F6FFFC] border-b-[24px] border-primary-600'>
          <div className='layout py-20'>
            <Typography as='h2' variant='h2' className='text-center'>
              Join 500+ Great Big Multinational Companies
            </Typography>
            <div className='flex flex-warp justify-center items-center mt-4'>
              {Companies.map((company, index) => (
                <NextImage
                  key={index}
                  src={company.path}
                  width={200}
                  height={100}
                  layout='responsive'
                  alt=''
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

// Card Agency
type CardAgencyProps = {
  id_: string;
  country: string;
  role: string;
  developer: number;
  experience: string[];
} & React.HTMLAttributes<HTMLDivElement>;

function CardAgency({
  id_,
  country,
  role,
  experience,
  developer,
  ...rest
}: CardAgencyProps) {
  return (
    <div
      {...rest}
      className={clsxm(
        'border-t-4 border-primary-600 p-4 bg-white',
        'w-[300px] h-[320px]'
      )}
    >
      <div className='border-l-2 border-primary-500 bg-[#F9F9F9] px-4 py-2'>
        <Typography as='h3' variant='h3'>
          {id_}
        </Typography>
        <Typography as='p' variant='p'>
          {country}
        </Typography>
      </div>
      <Typography as='h6' variant='h6' className='mt-4'>
        {role}
      </Typography>
      <div className='mt-4 border-y-2 border-secondary-100 py-2'>
        {Object.entries(experience).map(([key, value]) => (
          <Typography
            as='p'
            variant='l1'
            key={key}
            className='text-secondary-300'
          >
            {value}
          </Typography>
        ))}
      </div>
      <div className='mt-4 flex items-center'>
        <NextImage src='/landing/developer.png' width={69} height={26} alt='' />
        <Typography
          as='p'
          variant='s2'
          className='-translate-x-[20px] -translate-y-[1px]'
        >
          {developer}
        </Typography>
        <Typography as='p' variant='b2' className='text-secondary-300'>
          Developers
        </Typography>
      </div>
    </div>
  );
}

//  Card Profile
type CardProfileProps = {
  title: string;
  description: string;
  icon: IconType;
} & React.HTMLAttributes<HTMLDivElement>;

function CardProfile({
  title,
  description,
  icon: Icon,
  ...rest
}: CardProfileProps) {
  return (
    <div
      className={clsxm(
        'h-[260px] w-[320px] bg-white rounded-md shadow-card p-4',
        'flex flex-col'
      )}
      {...rest}
    >
      <div className='relative bg-primary-600 w-16 h-16 rounded-md'>
        <div
          className={clsxm(
            'absolute -top-1 -left-1 w-14 h-14 bg-[#C9FFEF99] shadow-icon backdrop:blur',
            'flex items-center justify-center rounded-md backdrop-blur-sm'
          )}
        >
          <Icon className='h-10 w-10 text-black' />
        </div>
      </div>
      <div className='mt-4'>
        <Typography as='h3' variant='h3'>
          {title}
        </Typography>
      </div>
      <div className='mt-4'>
        <Typography as='p' variant='p'>
          {description}
        </Typography>
      </div>
    </div>
  );
}
