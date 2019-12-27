import { NextApiRequest, NextApiResponse } from 'next';

/**
 * @see /api
 */
export default (_req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(JSON.stringify({ name: '/api' }));
};
