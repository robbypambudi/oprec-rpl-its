import SEO from '@/components/SEO';
import Typography from '@/components/Typography';
import Layout from '@/layouts/Layout';
import clsxm from '@/lib/clsxm';

export default function Home() {
  // Import Font in /public/fonts

  return (
    <Layout>
      <SEO title='' description='This is the home page' />
      <main>
        <section
          className={clsxm(
            'h-screen relative bg-[url(/images/landing/bg-hero.png)]',
            'bg-no-repeat bg-contain bg-bottom'
          )}
        >
          <div className='layout flex flex-col justify-center h-full'>
            <Typography as='h1' variant='h1'>
              Easy to <span className='text-primary-500'>Hire</span>
            </Typography>
          </div>
        </section>
      </main>
    </Layout>
  );
}
