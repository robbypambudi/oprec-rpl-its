import { NextApiRequest, NextApiResponse } from 'next';

import { Agencies } from '@/constant/landing';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json({ data: Agencies });
  }
}
