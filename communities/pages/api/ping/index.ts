import { NextApiRequest, NextApiResponse } from 'next';

/**
 * @see /api/ping
 * @returns Musicians[]
 */
export default (_req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(JSON.stringify({ name: '/api/ping', message: 'Ping is good' }));
};
