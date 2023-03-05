import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    res.status(200).json({ name: 'John Doe' });
  }
  if (req.method === 'POST') {
    const usernmae = req.body.email;
    const password = req.body.password;

    if (usernmae === 'admin@gmail.com' && password === 'admin') {
      res.status(200).json({ name: 'John Doe' });
    }
  }
}
