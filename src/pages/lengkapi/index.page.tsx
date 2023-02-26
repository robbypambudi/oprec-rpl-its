import Typography from '@/components/Typography';
import Layout from '@/layouts/Layout';
import BiodataForm from '@/pages/lengkapi/container/BiodataForm';

export default function LengkapiPage() {
  return (
    <Layout withNav={true}>
      <main className=''>
        <section className='layout min-h-screen py-20 flex items-center justify-center'>
          <div className='px-10 py-5 shadow-md backdrop-blur-sm md:w-1/2 w-full border'>
            <Typography as='h2' variant='h2' className='text-center mb-5'>
              Lengkapi Data Diri Anda
            </Typography>
            <BiodataForm />
          </div>
        </section>
      </main>
    </Layout>
  );
}
