import { NextApiRequest, NextApiResponse } from 'next';

/**
 * @see /api/notices
 * @returns Musicians[]
 */
export default (_req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(JSON.stringify({ name: '/api/notices' }));
};
