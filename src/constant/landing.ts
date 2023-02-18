import { IconType } from 'react-icons';
import { BsBuilding } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { HiCode } from 'react-icons/hi';

export const Cards: {
  title: string;
  description: string;
  icon: IconType;
}[] = [
  {
    title: '10K Developers',
    description:
      'We have a community of 10K+ developers who are ready to help you with your project.',
    icon: HiCode,
  },
  {
    title: '4K Agencies',
    description:
      'Agency owners from all over the world are using our platform to find the best developers.',
    icon: BsBuilding,
  },
  {
    title: '80K+ Users',
    description:
      'Many users are using our platform to find the best developers for their projects.',
    icon: FiUsers,
  },
];
