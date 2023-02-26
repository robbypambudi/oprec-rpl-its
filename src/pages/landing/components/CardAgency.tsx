import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';

type CardAgencyProps = {
  id_: string;
  country: string;
  role: string;
  developer: number;
  experience: string[];
} & React.HTMLAttributes<HTMLDivElement>;

export default function CardAgency({
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
        'border-t-4 border-primary-600 p-4 bg-white shadow',
        'w-[300px] h-[320px] hover:scale-105 transition-all duration-300 ease-in-out'
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
