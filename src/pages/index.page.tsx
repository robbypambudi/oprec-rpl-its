import { useQuery } from '@tanstack/react-query';

import NextImage from '@/components/NextImage';
import SEO from '@/components/SEO';
import Typography from '@/components/Typography';
import Layout from '@/layouts/Layout';
import clsxm from '@/lib/clsxm';
import CardAgency from '@/pages/landing/components/CardAgency';
import AgencySection from '@/pages/landing/container/AgencySection';
import HeroSection from '@/pages/landing/container/HeroSection';
import SkillSection from '@/pages/landing/container/SkillSection';
import { Agency } from '@/types/agencies';
import { ApiReturn } from '@/types/axios';

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
  const { data: agencies } = useQuery<ApiReturn<Agency>>(['/agency']);

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
          <HeroSection />
        </section>
        <section className='bg-secondary-600'>
          <SkillSection />
        </section>
        <section className='bg-[#F6FFFC]'>
          <div className='layout min-h-scree py-20'>
            <Typography as='h2' variant='h2' className=''>
              Agencies
            </Typography>
            <div className='flex flex-wrap gap-x-4 gap-y-6 items-center justify-center mt-6'>
              {agencies && (
                <>
                  {agencies.data.map((agency, index) => (
                    <CardAgency key={index} {...agency} />
                  ))}
                </>
              )}
            </div>
          </div>
        </section>
        <section className='bg-[#F6FFFC]'>
          <AgencySection />
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
