import { NextApiRequest, NextApiResponse } from 'next';

import { roles } from '@/types/role';

export default function Role(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json({ data: roles });
  }
}
