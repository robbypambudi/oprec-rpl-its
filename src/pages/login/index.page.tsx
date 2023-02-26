import Typography from '@/components/Typography';
import Layout from '@/layouts/Layout';
import clsxm from '@/lib/clsxm';
import LoginForm from '@/pages/login/container/LoginForm';

export default function LoginPage() {
  return (
    <Layout withNav={true}>
      <main className='min-h-screen bg-[url(/images/landing/bg-hero.png)] bg-no-repeat bg-cover bg-center'>
        <section
          className={clsxm('py-20 flex items-center justify-center h-full')}
        >
          <div className='px-10 py-5 shadow-md backdrop-blur-sm md:w-1/3 w-full border rounded'>
            <Typography as='h2' variant='h2' className='text-center mb-5'>
              Login
            </Typography>
            <LoginForm />
          </div>
        </section>
      </main>
    </Layout>
  );
}
