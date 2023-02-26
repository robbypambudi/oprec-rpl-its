import { IconType } from 'react-icons';

import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';

type CardProfileProps = {
  title: string;
  description: string;
  icon: IconType;
} & React.HTMLAttributes<HTMLDivElement>;

export default function CardProfile({
  title,
  description,
  icon: Icon,
  ...rest
}: CardProfileProps) {
  return (
    <div
      className={clsxm(
        'h-[260px] w-[320px] bg-white rounded-md shadow-card p-4',
        'flex flex-col hover:scale-105 transition-all duration-300 ease-in-out'
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
