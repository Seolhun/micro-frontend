import { NextApiRequest, NextApiResponse } from "next"

/**
 * @see /api/musicians
 * @returns Musicians[]
 */
export default (req: NextApiRequest, res: NextApiResponse) => {
	res.setHeader('Content-Type', 'application/json')
	res.statusCode = 200
	res.end(JSON.stringify({ name: 'Nextjs' }))
}
