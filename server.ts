import next from 'next'
import express from 'express'

import routes from './router/routes'

const port = parseInt((process as any).env.PORT, 10) || 3000
const isDev = process.env.NODE_ENV !== 'production'
const app = next({ dev: isDev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
	const server = express()
	routes.forEach(({ page, pattern }) => {
		server.get(pattern, (req, res) => {
			console.error({
				pattern,
				query: req.query,
				params: req.params,
			})
			return app.render(req, res, page, { ...req.query, ...req.params })
		})
	})
	server.route('*').get((req, res) => handle(req, res))
	server.listen(port, (error) => {
		if (error) {
			throw error
		}
		console.log(`> Ready on http://localhost:${port}`)
	})
})
