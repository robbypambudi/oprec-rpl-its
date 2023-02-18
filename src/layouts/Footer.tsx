import UnstyledLink from '@/components/links/UnstyledLink';

export default function Footer() {
  return (
    <footer className='flex justify-center items-center w-full h-16 bg-secondary-600'>
      <div className='text-center text-white'>
        © {new Date().getFullYear()} - Made with ❤️ by{' '}
        <UnstyledLink
          href='https://robbypambudi.com'
          target='_blank'
          rel='noopener noreferrer'
          className='text-primary-600 hover:text-primary-700'
        >
          Robby Pambudi
          <span className='text-gray-600 hover:text-gray-700'> </span>
        </UnstyledLink>
      </div>
    </footer>
  );
}
