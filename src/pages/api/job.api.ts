import type { NextApiRequest, NextApiResponse } from 'next';

import { Agencies } from '@/constant/landing';
export default function Job(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Process a POST request
    // Cek apakah ada query string
    if (req.query) {
      const role = req.query.role as string;
      const keyword = req.query.keyword as string;

      const _data = Agencies.filter((agency) => {
        return agency.role.toLowerCase().includes(keyword.toLowerCase());
      }, []);

      const data = _data.filter((agency) => {
        return agency.role.toLowerCase().includes(role.toLowerCase());
      }, []);

      return res.status(200).json({ data });
    }
  }
}
