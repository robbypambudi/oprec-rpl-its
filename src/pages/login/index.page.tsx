import Typography from '@/components/Typography';
import Layout from '@/layouts/Layout';
import LoginForm from '@/pages/login/container/LoginForm';

export default function LoginPage() {
  return (
    <Layout withNav={true}>
      <main className=''>
        <section className='layout min-h-screen py-20 flex items-center justify-center'>
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
